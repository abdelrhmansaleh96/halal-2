import "./benefitsIssuingCertificates.scss";
import SectionSubTitle from "../sectionSubTitle/sectionSubTitle";
import CardDescription from "../cardDescription/cardDescription";
const BenefitsIssuingCertificates = () => {
  return (
    <div className="flex flex-col  benefits-issuing-certificates xxl:gap-[42px] xl:gap-[36px] lg:gap-[24px] md:gap-[18px] gap-[12px] ">
      <SectionSubTitle
        text="Benefits of Issuing Halal Certificates"
        className="max-w-[750px]"
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 ">
        <CardDescription
          className="xxl:w-[386px] w-[280px]"
          text="Obtaining the Halal certificates slogan will support the credibility of applying Islamic standard specifications for traded food products in the market"
        />
        <CardDescription
          className="xxl:w-[386px] w-[280px]"
          text="Raising the standards of traded foods products (quality and safety) and increasing the competitiveness of products exported to Islamic countries and the satisfaction of Muslims from non-Islamic countries."
        />
        <CardDescription
          className="xxl:w-[386px]  w-[280px]"
          text="Confirmation of costumers’ confidence in the lawful and safety of their food and how it handed in the restaurants and hospitality services."
        />
      </div>
    </div>
  );
};

export default BenefitsIssuingCertificates;
