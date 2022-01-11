import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import debounce from "just-debounce-it";
import { useShippingCost } from "../hooks/useShippingCost";
import { sendEmail } from "../utils/sendEmail";

// Actions
import { setPurchasingData } from "../actions";

//Components
import CheckoutForm from "../components/Checkout-Form/CheckoutForm";
import Alert from "../components/Alert";
import PasarelaDePagos from "../components/Pasarela-de-pagos/PasarelaDePagos";

// Styled-Components
import { MainStyled } from "../styles/Inicio/style";
import {
  Title,
  Report,
  DetailsSection,
  Details,
  Totals,
} from "../styles/realizar-pago/style";

// Formatear precio
const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Checkout = ({ myCart, setPurchasingData }) => {
  const [addressCP, setAddressCP] = useState("");
  //Lista de precios
  const [listPrices, setListPrices] = useState([]);
  // Total del costo sin envio
  const [total, setTotal] = useState(0);
  //Referencia al formulario
  const paymentForm = useRef(null);
  const paymentGateway = useRef(null);
  // Datos del formulario
  const [formData, setFormData] = useState({});
  const [paymentData, setPaymentData] = useState({});
  // Obtiene el costo de envío y las ciudades disponibles según el código postal
  const [cost, deliveryCities] = useShippingCost(addressCP, total);
  // Estado del modal de alerta
  const [modalOpen, setModalOpen] = useState(false);
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    if (myCart.length > 0) {
      let prices = myCart.map((item) => item.price * item.initialQuantity);
      setListPrices(prices);
    }
  }, [myCart]);

  useEffect(() => {
    if (listPrices.length > 0) {
      let total = listPrices.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
      setTotal(total);
    }
  }, [listPrices]);

  useEffect(() => {
    deliveryCities[0] === "contact" ? setModalOpen(true) : setModalOpen(false);
  }, [deliveryCities]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrder = new FormData(paymentForm.current);
    const order = {
      date: new Intl.DateTimeFormat("es-MX", {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(new Date()),

      shippingName: newOrder.get("shippingName"),
      shippingLastName: newOrder.get("shippingLastName"),

      phoneNumber: newOrder.get("phoneNumber"),
      shippingEmail: newOrder.get("shippingEmail"),

      addressState: newOrder.get("addressState"),
      addressCP: newOrder.get("addressCP"),
      addressCity: newOrder.get("addressCity"),
      addressStreet: newOrder.get("addressStreet"),
      addressNumber: newOrder.get("addressNumber"),
      addressReferences: newOrder.get("referencesText"),

      requiredInvoice: newOrder.get("invoiceRequiredInput"),
      invoiceRFC: newOrder.get("invoiceRFC"),
      invoiceCompanyName: newOrder.get("invoiceCompanyName"),
      cfdi: newOrder.get("cfdi"),
      invoicePhoneNumber: newOrder.get("invoicePhoneNumber"),
      invoiceShippingEmail: newOrder.get("invoiceShippingEmail"),

      subTotal: newOrder.get("subTotal"),
      shippingCost: newOrder.get("shippingCost"),
      total: newOrder.get("total"),

      products: myCart,
    };

    setFormData(order);
    paymentGateway.current.click();
  };

  useEffect(() => {
    if (paymentData.orderNumber) {
      let order = { ...formData, ...paymentData };
      sendEmail(order);
      setPurchasingData(order);
    }
  }, [formData, paymentData]);

  const paymentGatewayResponse = (e) => {
    e.preventDefault();

    const status = e.data.elementArr.filter(
      (element) => element.name === "status"
    );

    const code = e.data.elementArr.filter(
      (element) => element.name === "approval_code"
    );

    if (status[0].value === "APROBADO") {
      const orderSucces = {
        orderNumber: e.data.elementArr[4].value,
        approvalCode: e.data.elementArr[14].value,
        purchaseAmount: e.data.elementArr[11].value,
        terminatedCard: e.data.elementArr[27].value.slice(-4),
      };

      setPaymentData(orderSucces);
    } else {
      const failReason = e.data.elementArr.filter(
        (element) => element.name === "fail_reason"
      );
      const chargetotal = e.data.elementArr.filter(
        (element) => element.name === "chargetotal"
      );
      const orderFail = {
        status: status[0].value,
        failReason: failReason.length !== 0 ? failReason[0].value : "",
        chargeTotal: chargetotal.length !== 0 ? chargetotal[0].value : "",
        approval_code: code[0].value,
      };
      setPurchasingData(orderFail);
    }
    setTimeout(() => {
      window.location.href = e.data.redirectURL;
    }, 800);
  };

  // Código de pasarela de pagos
  function forwardForm(responseObj, elementArr) {
    var newForm = document.createElement("form");
    newForm.setAttribute("method", "post");
    newForm.setAttribute("action", "");
    newForm.setAttribute("action", responseObj.redirectURL);
    newForm.setAttribute("id", "newForm");
    newForm.setAttribute("name", "newForm");
    document.body.appendChild(newForm);
    for (var i = 0; i < elementArr.length; i++) {
      var element = elementArr[i];
      var input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", element.name);
      input.setAttribute("value", element.value);
      // document.newForm.appendChild(input);
      document.getElementById("newForm").appendChild(input);
    }
    // document.getElementById("newForm").submit();
  }

  // Limita el numero de llamados a las funciones de
  // enviar mail y cambiar de pagina
  const handlePurchase = debounce(async (e, elementArr) => {
    paymentGatewayResponse(e);
    forwardForm(e.data, elementArr);
  }, 3000);

  const receiveMessage = (e) => {
    if (
      e.origin === "https://www2.ipg-online.com" ||
      e.origin === "https://test.ipg-online.com"
    ) {
      let elementArr = e.data.elementArr;
      handlePurchase(e, elementArr);
    } else {
      return;
    }
  };

  useEffect(() => {
    window.addEventListener("message", (e) => receiveMessage(e), false);
    return () => {
      window.removeEventListener("message", (e) => receiveMessage(e), false);
    };
  }, ["message"]);

  return (
    <>
      <MainStyled>
        <Title>Datos de compra</Title>
        <CheckoutForm
          showForm={showForm}
          addressCP={addressCP}
          setAddressCP={setAddressCP}
          cities={deliveryCities}
          paymentForm={paymentForm}
          handleSubmit={handleSubmit}
          total={total}
          cost={cost}
        />
        <Report>Los datos marcados con (*) son obligatorios</Report>
        <DetailsSection>
          <Details>
            <p>Subtotal</p>
            <p>${formatter.format(total)}</p>
          </Details>
          <Details>
            <p>Envío</p>
            {cost === 0 ? <p>GRATIS*</p> : <p>${formatter.format(cost)}</p>}
          </Details>
          <Details>
            <p>Tu total</p>
            <Totals>${formatter.format(total + cost)}</Totals>
          </Details>
        </DetailsSection>
        <PasarelaDePagos
          total={total + cost}
          pay={deliveryCities[0] === "contact" ? false : true}
          setShowForm={setShowForm}
          paymentGateway={paymentGateway}
        />
      </MainStyled>
      {modalOpen && (
        <Alert
          isOpen={modalOpen}
          handleClose={setModalOpen}
          cart={myCart}
          zipCode={addressCP}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myCart: state.myCart,
  };
};

const mapDispatchToProps = {
  setPurchasingData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
