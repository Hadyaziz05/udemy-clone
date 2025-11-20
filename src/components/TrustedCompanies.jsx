import './TrustedCompanies.css';
import trustedCompaniesImage from '../icons/trusted-companies.png';

function TrustedCompanies() {
  return (
    <section className="trusted-companies">
      <div className="trusted-companies-container">
        <img src={trustedCompaniesImage} alt="Trusted by companies worldwide" />
      </div>
    </section>
  );
}

export default TrustedCompanies;
