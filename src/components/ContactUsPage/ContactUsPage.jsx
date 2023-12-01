import Contactusbg from "./ContactUsbg";
import ContactHeader from "./contact-header";
import ContactInfo from "./contactInfo";
import ContactMapLabel from "./contactMapLabel";
import Bread from "./bread";
import Map from "./map";

function ContactUsPage() {
  return (
    <div>
      <Contactusbg />
      <Bread/>
      {/* <ContactHeader /> */}
      <ContactInfo />
      <ContactMapLabel />
      <Map/>
    </div>
  );
}

export default ContactUsPage;
