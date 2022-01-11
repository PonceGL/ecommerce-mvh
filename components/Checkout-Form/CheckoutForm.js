import { useState, useEffect } from "react";

// Data
import { cfdis } from "../../database/cfdis";

// Styled Components
import {
  Form,
  Fieldset,
  Legend,
  InputBase,
  InputMail,
  Report,
  AlertText,
  InputRfc,
  Select,
  SelectInvoice,
  Textarea,
  PickUpButton,
  PickUpConatiner,
  PickUpLink,
  SubmitButton,
} from "./style";

const CheckoutForm = ({
  showForm,
  addressCP,
  setAddressCP,
  cities,
  paymentForm,
  handleSubmit,
  total,
  cost,
}) => {
  const [pickUp, setPickUp] = useState(false);
  const [activeSubmit, setActiveSubmit] = useState(true);
  const [required, setRequired] = useState(true);

  // Estados de todos los inputs
  const [shippingName, setShippingName] = useState("");
  const [shippingLastName, setShippingLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [shippingEmail, setShippingEmail] = useState("");
  const [verifyEmail, setVerifyEmail] = useState("");

  const [addressState, setAddressState] = useState("");

  const [addressCity, setaddressCity] = useState(cities);
  const [addressSubdivision, setAddressSubdivision] = useState("");
  const [addressStreet, setAddressStreet] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [referencesText, setReferencesText] = useState("");

  const [invoiceRFC, setInvoiceRFC] = useState("");
  const [invoiceCompanyName, setInvoiceCompanyName] = useState("");
  const [invoicePhoneNumber, setInvoicePhoneNumber] = useState("");
  const [invoiceShippingEmail, setInvoiceShippingEmail] = useState("");
  const [cfdi, setCfdi] = useState("CFDI*");

  const emailRegex = /[\w\._]{5,30}\+?[\w]{0,20}@[\w\.\-]{3,}\.\w{2,5}$/;

  // console.log("shippingName: ", shippingName);
  // console.log("shippingLastName: ", shippingLastName);
  // console.log("phoneNumber: ", phoneNumber);

  // console.log("shippingEmail: ", shippingEmail);
  // console.log("verifyEmail: ", verifyEmail);

  // console.log("addressState: ", addressState);
  // console.log("addressCP: ", addressCP);
  // console.log("addressCity: ", addressCity);
  // console.log("addressSubdivision: ", addressSubdivision);
  // console.log("addressStreet: ", addressStreet);
  // console.log("addressNumber: ", addressNumber);
  // console.log("referencesText: ", referencesText);
  // console.log("invoiceRFC: ", invoiceRFC);
  // console.log("invoiceCompanyName: ", invoiceCompanyName);
  // console.log("invoicePhoneNumber: ", invoicePhoneNumber);
  // console.log("invoiceShippingEmail: ", invoiceShippingEmail);
  // console.log("cfdi: ", cfdi);

  useEffect(() => {
    if (
      shippingName.length > 3 &&
      shippingLastName.length > 3 &&
      phoneNumber.length === 10 &&
      emailRegex.test(shippingEmail) &&
      verifyEmail === shippingEmail
    ) {
      if (!pickUp) {
        if (
          addressState.length > 3 &&
          addressCP.length > 4 &&
          addressSubdivision.length > 3 &&
          addressStreet.length > 3 &&
          addressNumber !== "" &&
          referencesText.length > 30
        ) {
          setActiveSubmit(true);
        }
      } else {
        setActiveSubmit(true);
      }

      if (invoiceRFC.length >= 1) {
        if (
          invoiceCompanyName.length > 3 &&
          invoicePhoneNumber.length === 10 &&
          emailRegex.test(invoiceShippingEmail) &&
          cfdi !== "CFDI*"
        ) {
          setActiveSubmit(true);
        } else {
          setActiveSubmit(false);
        }
      }
    } else {
      setActiveSubmit(false);
    }
  }, [
    shippingName,
    shippingLastName,
    phoneNumber,
    shippingEmail,
    verifyEmail,
    addressState,
    addressCP,
    addressCity,
    addressSubdivision,
    addressStreet,
    addressNumber,
    referencesText,
    invoiceRFC,
    invoiceCompanyName,
    invoicePhoneNumber,
    invoiceShippingEmail,
    cfdi,
  ]);

  useEffect(() => {
    pickUp ? setAddressCP("pickUp") : setAddressCP("");
  }, [pickUp]);

  return (
    <Form
      ref={paymentForm}
      onSubmit={handleSubmit}
      autoComplete="off"
      showForm={showForm}
    >
      <Fieldset>
        <Legend>¿A quién se lo enviamos?</Legend>
        <InputBase
          type="text"
          name="shippingName"
          placeholder={`Nombre/s ${required && "*"}`}
          maxLength="30"
          text={shippingName.length > 3 ? true : false}
          value={shippingName}
          onChange={(e) => setShippingName(e.target.value.toString())}
        />
        <InputBase
          type="text"
          name="shippingLastName"
          placeholder={`Apellidos ${required && "*"}`}
          maxLength="30"
          text={shippingLastName.length > 3 ? true : false}
          value={shippingLastName}
          onChange={(e) => setShippingLastName(e.target.value.toString())}
        />
        <InputBase
          type="tel"
          inputMode="numeric"
          name="phoneNumber"
          placeholder={`Numero de teléfono ${required && "*"}`}
          maxLength="10"
          pattern="[0-9]{10}"
          text={phoneNumber.length === 10 ? true : false}
          value={phoneNumber}
          onChange={(e) =>
            setPhoneNumber(e.target.value.replace(/\D/g, "").trim())
          }
        />
        <InputMail
          type="email"
          name="shippingEmail"
          placeholder={`Correo Electrónico ${required && "*"}`}
          maxLength="30"
          text={emailRegex.test(shippingEmail)}
          value={shippingEmail}
          onChange={(e) => setShippingEmail(e.target.value.toString())}
        />
        <InputMail
          type="email"
          name="verifyEmail"
          placeholder={`Verifica el Correo Electrónico ${required && "*"}`}
          maxLength="30"
          text={verifyEmail === shippingEmail ? true : false}
          value={verifyEmail}
          onChange={(e) => setVerifyEmail(e.target.value.toString())}
        />
        <Report>A este correo se enviará su comprobante de compra</Report>
      </Fieldset>
      <Fieldset>
        <Legend>¿A dónde lo enviamos?</Legend>
        <PickUpButton type="button" onClick={() => setPickUp(!pickUp)}>
          {!pickUp ? `Prefiero recogerlo en tienda` : `Mejor que me lo envíen`}
        </PickUpButton>
        {!pickUp ? (
          <>
            <InputBase
              type="text"
              name="addressState"
              placeholder={`Estado ${!pickUp && "*"}`}
              maxLength="30"
              text={addressState.length > 3 ? true : false}
              value={addressState}
              onChange={(e) => setAddressState(e.target.value.toString())}
            />
            <Select
              name="addressCity"
              defaultValue="Xalapa"
              onChange={(e) => setaddressCity(e.target.value)}
            >
              {cities.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
            <InputBase
              type="text"
              inputMode="numeric"
              name="addressCP"
              placeholder={`Código Postal ${!pickUp && "*"}`}
              maxLength="7"
              text={addressCP.length > 4 ? true : false}
              value={addressCP}
              onChange={(e) =>
                setAddressCP(e.target.value.replace(/\D/g, "").trim())
              }
            />
            <InputBase
              type="text"
              name="addressSubdivision"
              placeholder={`Fraccionamiento ${!pickUp && "*"}`}
              maxLength="40"
              text={addressSubdivision.length > 3 ? true : false}
              value={addressSubdivision}
              onChange={(e) => setAddressSubdivision(e.target.value.toString())}
            />
            <InputBase
              type="text"
              name="addressStreet"
              placeholder={`Calle ${!pickUp && "*"}`}
              maxLength="40"
              text={addressStreet.length > 3 ? true : false}
              value={addressStreet}
              onChange={(e) => setAddressStreet(e.target.value.toString())}
            />
            <InputBase
              type="text"
              inputMode="numeric"
              name="addressNumber"
              placeholder={`Numero ${!pickUp && "*"}`}
              maxLength="4"
              text={addressNumber.length >= 1 ? true : false}
              value={addressNumber}
              onChange={(e) =>
                setAddressNumber(e.target.value.replace(/\D/g, "").trim())
              }
            />
            <Textarea
              name="referencesText"
              placeholder={`Referencias (Por favor proporciona detalles para encontrar tu domicilio) ${
                !pickUp && "*"
              }`}
              maxLength="350"
              text={referencesText.length > 30 ? true : false}
              value={referencesText}
              onChange={(e) => setReferencesText(e.target.value.toString())}
            />
          </>
        ) : (
          <PickUpConatiner>
            <p>
              Podrás recoger tu pedido en la sucursal
              <br />
              <span>Lázaro Cárdenas</span>
            </p>
            <p>
              Av. Lázaro Cárdenas N.274 Col. Encinal c.p 91180 Xalapa, Veracruz
            </p>
            <PickUpLink
              href="https://goo.gl/maps/CS4JgsBKMByXvEHt5"
              target="_blank"
              rel="noopener noreferrer"
              itemProp="hasMap"
            >
              Ver ubicación
            </PickUpLink>
            <p>Nos pondremos en contacto contigo para coordinar tu entrega</p>
            <p>Por favor verifica tus datos de contacto, teléfono y mail</p>

            <input type="hidden" name="addressState" readOnly />
            <input type="hidden" name="addressCP" readOnly />
            <input type="hidden" name="addressCity" readOnly />
            <input type="hidden" name="addressStreet" readOnly />
            <input type="hidden" name="addressNumber" readOnly />
            <input
              type="hidden"
              name="referencesText"
              value="Prefiero recogerlo en tienda"
              readOnly
            />
          </PickUpConatiner>
        )}
      </Fieldset>
      <Fieldset>
        <Legend>¿Requiere factura?</Legend>
        <InputRfc
          type="text"
          name="invoiceRFC"
          placeholder="RFC"
          maxLength="13"
          text={invoiceRFC.length >= 12 ? true : false}
          value={invoiceRFC}
          onChange={(e) => setInvoiceRFC(e.target.value.toString())}
        />
        <InputBase
          type="text"
          name="invoiceCompanyName"
          placeholder={`Razón Social ${invoiceRFC.length >= 1 ? "*" : ""}`}
          maxLength="50"
          text={invoiceCompanyName.length > 3 ? true : false}
          value={invoiceCompanyName}
          onChange={(e) => setInvoiceCompanyName(e.target.value.toString())}
        />
        <InputBase
          type="tel"
          inputMode="numeric"
          name="invoicePhoneNumber"
          placeholder={`Numero de teléfono ${
            invoiceRFC.length >= 1 ? "*" : ""
          }`}
          maxLength="10"
          pattern="[0-9]{10}"
          text={invoicePhoneNumber.length === 10 ? true : false}
          value={invoicePhoneNumber}
          onChange={(e) =>
            setInvoicePhoneNumber(e.target.value.replace(/\D/g, "").trim())
          }
        />
        <InputMail
          type="email"
          name="invoiceShippingEmail"
          placeholder={`Correo Electrónico ${
            invoiceRFC.length >= 1 ? "*" : ""
          }`}
          maxLength="30"
          text={emailRegex.test(invoiceShippingEmail)}
          value={invoiceShippingEmail}
          onChange={(e) => setInvoiceShippingEmail(e.target.value.toString())}
        />
        {invoiceRFC.length >= 1 && (
          <>
            {cfdis.length && (
              <SelectInvoice
                name="cfdi"
                defaultValue="CFDI*"
                onChange={(e) => setCfdi(e.target.value)}
              >
                <option value="CFDI*">CFDI*</option>
                {cfdis.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </SelectInvoice>
            )}
          </>
        )}
      </Fieldset>
      <input
        type="hidden"
        name="invoiceRequiredInput"
        value={
          invoiceRFC.length >= 1 ? `Si requiere factura` : `No requiere factura`
        }
        readOnly
      />
      <input type="hidden" name="cfdi" value={cfdi} readOnly />
      <input type="hidden" name="subTotal" value={total} readOnly />
      <input type="hidden" name="shippingCost" value={cost} readOnly />
      <input type="hidden" name="total" value={total + cost} readOnly />
      {activeSubmit && <SubmitButton type="submit">Siguiente</SubmitButton>}
      {!activeSubmit && (
        <AlertText>
          Completa todos los campos obligatorios (*), con al menos 3 caracteres
        </AlertText>
      )}
    </Form>
  );
};

export default CheckoutForm;
