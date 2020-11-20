import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography, Grid, Container } from '@material-ui/core/';
import PageTitle from '../layout/PageTitle';

const useStyles = makeStyles((theme) => ({}));

export const TermsOfUse: FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <PageTitle title="Terms of Use" subtitle="Effective Date: 4/1/2019" />
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="body1" paragraph>
            These Terms of Use (“Terms of Use” or “Terms”) along with our{' '}
            <a href="https://kalamos.care/pages/privacy-policy">Privacy Policy</a>{' '}
          constitute a valid and binding contract between you (“you” or the
          “Client”) and Kalamos Care, Inc., the owner and operator of this
          website, <a href="https://kalamos.care/">https://kalamos.care/</a>{' '}
          (“the Website,” or “this Website”) &nbsp;and of Kalamos Care’s STI
          testing management services. &nbsp;These Terms, which also incorporate
          by reference the terms of our Privacy Policy, govern your &nbsp;access
          to and use of the Website, Kalamos Care’s STI testing management
          services, online services, and software provided on or in connection
          with such services (collectively, the “Services”). &nbsp;Kalamos Care
          (“Kalamos”, “us”, “we”, or “our”) operates the Services and makes the
          Services available to our Clients and user community. By agreeing to
          use the Services, you are agreeing to be bound by these Terms of Use
          and all applicable laws and regulations. &nbsp;If you do not agree
          with any of these Terms of Use, you are prohibited from using or
          accessing the Services. The materials and information available
          through the Services are protected by applicable intellectual property
          laws.
        </Typography>
          <Typography variant="body1" paragraph>
            We reserve the right to change these Terms of Use from time to time
            for any reason, which shall be effected by posting the updated Terms
            of Use here. &nbsp;If there are significant changes, we will notify
            you directly and ask for your agreement to those changes. Otherwise,
            your continued use of the Services after any changes are posted
            constitutes your acceptance of the new Terms of Use. We recommend that
            you revisit these Terms of Use from time to time to ensure you are
            aware of any changes.
        </Typography>
          <ol>
            <Typography variant="body1">
              <li>
                <b>Your Use of the Services</b>
                <Typography variant="body1" paragraph>
                  You may have been invited by us to access the Service by
                  creating an account (“Account”), and may have received an email
                  with a link or a token, or may have been given a kit number or
                  barcode to create an Account. &nbsp;You agree that you will use
                  any information that you use to gain access to the Services
                  (“Access Information”) correctly, in accordance with these Terms
                  of Use, and for the exclusive purpose of accessing the Services.
              </Typography>
                <Typography variant="body1" paragraph>
                  You are also responsible for maintaining the confidentiality of
                  your username and password. We encourage you to use “strong”
                  passwords (e.g., passwords that use a combination of upper and
                  lower case letters, numbers and symbols) with your Account. You
                  will be fully responsible for all activities that occur under
                  your Account, including activities of others to whom you have
                  provided your username or password so please notify us
                  immediately of any unauthorized use of your Account or any other
                  breach of security.
              </Typography>
                <Typography variant="body1" paragraph>
                  You acknowledge and understand that our Services are intended
                  for users residing in the U.S. only.
              </Typography>
              </li>
              <li>
                <b>Entry of Information</b>
                <Typography variant="body1" paragraph>
                  Please be advised that the Services may require the use of
                  intake forms which request personal information, such as medical
                  and demographic information (“Personal Information”). &nbsp;For
                  a description of how Kalamos collects, uses, secures, and shares
                  your Personal Information, please refer to our Privacy Policy.
              </Typography>
                <Typography variant="body1" paragraph>
                  We contract with JN Projects, Inc., d.b.a HelloSign
                  (“HelloSign”) to assist us in the creation, completion, and
                  management of intake forms and other forms necessary to perform
                  the Services. &nbsp;By agreeing to use the Services, you are
                  expressly agreeing to allow HelloSign to access and use your
                  Personal Information in accordance with its privacy policy,
                  available here:https://www.hellosign.com/privacy.
              </Typography>
              </li>
              <li>
                <b>Sample Collection Requirements</b>
                <Typography variant="body1" paragraph>
                  You may be required to provide a urine, saliva, blood or other
                  biological sample (collectively “Samples”) in order to use the
                  Services. &nbsp;All Samples must be collected in accordance with
                  the collection instructions contained in the testing kit
                  provided by Kalamos (the “Testing Kit”). &nbsp;Kalamos and any
                  laboratories or outside vendors that it uses have no obligation
                  to deliver results for Samples that are not collected in
                  accordance with the Testing Kit instructions. &nbsp;Any Samples
                  not collected in accordance with the Testing Kit instructions
                  that are tested and determined to be insufficient are subject to
                  a processing and disposal fee of $12.00.
              </Typography>
              </li>
              <li>
                <b>Access of Information</b>
                <Typography variant="body1" paragraph>
                  The Service is provided as an information entry resource only.
                  Any information you obtain from using the Service is not
                  intended to be used by you for any diagnostic or treatment
                  purposes. The Services does not create a patient-physician
                  relationship between you and Kalamos and should not be used as a
                  substitute for professional diagnosis and treatment.
                  &nbsp;Please consult your physician or healthcare provider (your
                  “Provider”) before making any healthcare decisions.
              </Typography>
                <Typography variant="body1" paragraph>
                  You agree not to access the Services from insecure mobile
                  devices, PCs or laptops, such as public internet kiosks found at
                  airports and public libraries. You agree that you are using and
                  will continue to use appropriate technical safeguards to secure
                  the devices used to access the Services, including up-to-date
                  virus protection on PCs. You understand that if you print any
                  Personal Information, there is a risk that the Personal
                  Information might be inappropriately disclosed, and Kalamos Care
                  cannot protect the security of printed documents. You agree that
                  you will not upload any material that contains software viruses
                  or any other computer code, files or programs designed to
                  interrupt, destroy or limit the functionality of any computer
                  software, this Website or the Services.
              </Typography>
              </li>
              <li>
                <b>Age</b>
                <Typography variant="body1" paragraph>
                  Our Services and any related content, including our public
                  content, is not directed at or meant for individuals under the
                  age of 18. NO ONE UNDER THE AGE OF 18 IS PERMITTED TO USE OUR
                  SERVICES. Anyone under the age of 18 who uses our Services is in
                  violation of this Agreement and will have their account
                  immediately terminated. Kalamos will immediately and permanently
                  delete all information associated with that account from our
                  records.
              </Typography>
                <Typography variant="body1" paragraph>
                  Should anyone over the age of 18, including a parent or legal
                  guardian, assist anyone under the age of 18 to sign up for or
                  use our Services, Kalamos will immediately terminate any user
                  account created, immediately and permanently delete all
                  information associated with that account from our records, and
                  permanently ban that user or anyone associated with that user
                  from using our Services in the future.
              </Typography>
              </li>
              <li>
                <b>Use License</b>
                <ol>
                  <li>
                    Kalamos Care grants you a personal, non-transferable,
                    non-exclusive right to access and use the Services and the
                    materials available through the Services subject to these
                    Terms of Use. You may temporarily download one copy of the
                    materials available through the Services where the Services
                    expressly permits or provides for downloads, and you may print
                    pages displayed by the Services. &nbsp;As used herein, the
                    term “material” means all information, result reports, text,
                    images, data, links, software or other material accessible
                    through the Services, whether created by us or provided by
                    another person for display on the Services. This is the grant
                    of a license, not a transfer of title, and under this license
                    you may not:
                </li>
                  <ol>
                    <li>modify or copy the materials;</li>
                    <li>
                      use the materials for any commercial purpose, or for any
                      public display or distribution (commercial or
                      non-commercial);
                  </li>
                    <li>
                      attempt to decompile or reverse engineer any portion of the
                      Services;
                  </li>
                    <li>
                      use any robot, spider, site search/retrieval application, or
                      other automated device, process, or means to access,
                      retrieve, scrape, or index any portion of the Services;
                  </li>
                    <li>
                      incorporate links to the Services or frame any elements of
                      the Services within any other website;
                  </li>
                    <li>
                      remove any copyright or other proprietary notations from the
                      materials;
                  </li>
                    <li>
                      obtain unauthorized access to any computer system through
                      the Services;
                  </li>
                    <li>
                      introduce viruses, worms, Trojan horses and/or harmful code
                      to any of the Services;
                  </li>
                    <li>
                      interrupt or attempt to interrupt the operation of the
                      Services in any way; or
                  </li>
                    <li>
                      transfer the materials to another person or “mirror” the
                      materials on any other server.
                  </li>
                  </ol>
                  <li>
                    This license, which includes without limitation all rights
                    granted by Kalamos Care in this Section 5, shall automatically
                    terminate if you violate any of these restrictions. Further,
                    Kalamos Care may terminate all your rights under this Section
                    5 at any time. Upon terminating your viewing of these
                    materials or upon the termination of this license, you must
                    destroy any downloaded materials in your possession whether in
                    electronic or printed format.
                </li>
                </ol>
              </li>
              <li>
                <b>Use of Your Personal Information</b>
                <Typography variant="body1" paragraph>
                  By creating an Account, you hereby grant and will grant Kalamos
                  Care and its affiliated companies a nonexclusive, worldwide,
                  royalty free, fully paid up, transferable, sublicenseable,
                  perpetual, irrevocable license to copy, display, transmit,
                  distribute, store, modify and otherwise use your de-identified
                  or aggregated Personal Information in connection with research
                  purposes and the development, operation, advertising or
                  marketing of the Services, in any form now known or later
                  developed. &nbsp;
              </Typography>
                <Typography variant="body1" paragraph>
                  You may have the option to use social media features, such as
                  private Facebook groups for Kalamos Care users. &nbsp;Social
                  media features may allow the social media provider, like
                  Facebook, to collect certain information, such as your IP
                  address or which page you are visiting on our Website, and may
                  set a cookie on your computer to enable the feature to function
                  properly. &nbsp;Your interactions with these features are
                  governed by the privacy policy of the social media provider
                  offering them.
              </Typography>
                <Typography variant="body1" paragraph>
                  The Personal Information, and any other information you provide
                  through the Services, may be used by the Provider to evaluate
                  your medical status and/or administer any patient care you may
                  receive, and by us as set forth in our Privacy Policy, and you
                  hereby consent to such uses.
              </Typography>
              </li>
              <li>
                <b>Access and Interference</b>
                <Typography variant="body1" paragraph>
                  You agree that you will not use any robot, spider, other
                  automatic device, or manual process to monitor or copy our
                  Website pages or the content contained herein without our prior
                  express written permission.&nbsp;
              </Typography>
                <Typography variant="body1" paragraph>
                  You agree that you will not use any device, software or routine
                  to bypass any code which may be included to prevent you from
                  breaching the obligations in this paragraph or to interfere or
                  attempt to interfere with the proper working of our Website or
                  Services.&nbsp;
              </Typography>
                <Typography variant="body1" paragraph>
                  You agree that you will not take any action that imposes an
                  unreasonable or disproportionately large load on our or our
                  host’s infrastructure.
              </Typography>
                <Typography variant="body1" paragraph>
                  You may not engage in the practices of “screen scraping,”
                  “database scraping,” or any other practice or activity the
                  purpose of which is to obtain lists of users, portions of a
                  database, or other lists or information from our Website or
                  Services, in any manner or in any quantities not authorized by
                  Kalamos.&nbsp;
              </Typography>
                <Typography variant="body1" paragraph>
                  You may not frame or utilize framing techniques to enclose any
                  trademark, logo, or other proprietary information (including
                  images, text, page layout, or form) of Kalamos without prior
                  express written consent.&nbsp;
              </Typography>
                <Typography variant="body1" paragraph>
                  You may not use meta tags or any other “hidden text” utilizing
                  Kalamos’ name or trademarks without the express written consent
                  of Kalamos.&nbsp;Systematic retrieval of data from our Website
                  or Services to create or compile directly or indirectly, in
                  whole or in part, a collection, compilation, database or
                  directory without the express written permission of Kalamos is
                  strictly prohibited.
              </Typography>
              </li>
              <li>
                <b>Intellectual Property</b>
                <Typography variant="body1" paragraph>
                  All materials and information available through the Services are
                  the sole and exclusive property of Kalamos Care and its
                  affiliates, suppliers or licensors (the “Kalamos Care
                  Entities”), and are protected from unauthorized copying and
                  dissemination by United States copyright law, trademark law,
                  international conventions and other intellectual property laws.
                  &nbsp;The service marks and trademarks of Kalamos Care,
                  including without limitation “Kalamos Care” and the Kalamos Care
                  logos, are trademarks and service marks owned by Kalamos Care
                  Inc. Any other trademarks, service marks, logos and/or trade
                  names appearing via our Services are the property of their
                  respective owners. You may not copy or use any of these marks,
                  logos or trade names without the express prior written consent
                  of the owner. &nbsp;If you provide us with any suggestions for
                  improvements to our Services or relating to any prospective
                  products or services, be aware that any comments or suggestions
                  you make to Kalamos Care are non-confidential and become the
                  property of Kalamos Care, and you hereby grant to us a
                  non-exclusive, irrevocable, perpetual, transferable,
                  sublicensable (through one or more tiers) license to copy, use
                  and modify such suggestions and to make, have made, use, import,
                  offer to sell and sell any products or services incorporating
                  such suggestions, without acknowledgment or compensation to you.
              </Typography>
              </li>
              <li>
                <b>Entry of Financial Information</b>
                <Typography variant="body1" paragraph>
                  You may be required to enter financial information in order to
                  access the Services. &nbsp;Financial information requested of
                  you may include payment data, (e.g., credit card numbers,
                  expiration dates, identification numbers, billing addresses,
                  etc.) that you provide to us via our payment entry system as
                  part of the Services. Such Financial information will be
                  safeguarded and will only be accessed by authorized Kalamos Care
                  employees or contracted third parties who provide services to
                  Kalamos Care.
              </Typography>
                <Typography variant="body1" paragraph>
                  We contract with Shopify, Inc. and its affiliates, including
                  Shopify Data Processing (USA) Inc., Shopify Payments (USA) Inc.,
                  Shopify (USA) Inc., and Shopify International Limited
                  (collectively, “Shopify”) to process your financial information.
                  &nbsp;By agreeing to use the Services, you are expressly
                  agreeing to allow Shopify to access and use your Personal
                  Information, which may include sensitive Personal Information
                  relating to your medical or health conditions and sexual
                  preferences), in accordance with its privacy policy, available
                here:{' '}
                  <a href="https://www.shopify.com/legal/privacy">
                    https://www.shopify.com/legal/privacy
                </a>
                .
              </Typography>
                <Typography variant="body1" paragraph>
                  When you pay for Services by credit card, you represent and
                  warrant that you are authorized to use such credit card, and you
                  agree to pay all charges incurred by purchasing the Services.
                  You agree that we may&nbsp;transfer&nbsp;your credit card
                  information and related personally identifiable information to
                  our designated service provider(s) for their use in charging you
                  for Services.
              </Typography>
              </li>
              <li>
                <b>Refund Policy</b>
                <Typography variant="body1" paragraph>
                  Any&nbsp;refunds&nbsp;provided under this&nbsp;policy&nbsp;will
                  be issued to the credit card(s) used for the purchase and will
                  be processed within 30 business days. Your credit card will be
                  charged upfront when you purchase&nbsp;the Services.
              </Typography>
              </li>
              <li>
                <b>Scope of Services</b>
                <Typography variant="body1" paragraph>
                  You are responsible for obtaining any equipment and Internet
                  service necessary to access the Services and for paying any fees
                  for the equipment and service you select. We may alter, suspend,
                  or discontinue the Services in whole or in part, at any time and
                  for any reason, without notice. The Services may also
                  periodically become unavailable due to maintenance or
                  malfunction of computer equipment or for other
                  reasons.&nbsp;&nbsp;
              </Typography>
              </li>
              <li>
                <b>Disclaimers</b>
                <Typography variant="body1" paragraph>
                  USE OF THE SERVICES IS VOLUNTARY. KALAMOS CARE AND THE SERVICES
                  ARE NOT OFFERING MEDICAL ADVICE AS PART OF YOUR USE OF THE
                  SERVICES. &nbsp;KALAMOS CARE DOES NOT PROVIDE ANY MEDICAL
                  REFERRALS OR DIAGNOSES FOR ANY MEDICAL CONDITIONS. KALAMOS CARE
                  SHALL HAVE NO OBLIGATION, RESPONSIBILITY OR LIABILITY FOR ANY
                  PROVIDER’S PROVISION OF PROFESSIONAL SERVICES. &nbsp;KALAMOS
                  CARE MAKES NO GUARANTEES OF SUCCESS OR FAILURE IN ANY COURSE OF
                  TREATMENT TO WHICH YOU MAY CONSENT AFTER YOUR USE OF THE
                SERVICES. IF YOU HAVE ANY QUESTION RELATED TO YO<b>U</b>R
                HEALTH, PLEASE CONTACT YOUR HEALTHCARE PROVIDER.
              </Typography>
                <Typography variant="body1" paragraph>
                  THE SERVICES AND THE MATERIALS AVAILABLE THROUGH THE SERVICE ARE
                  PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS AND USE OF THE
                  SERVICES IS AT YOUR OWN RISK AND, TO THE MAXIMUM EXTENT
                  PERMITTED BY APPLICABLE LAW, KALAMOS CARE, AND THE KALAMOS CARE
                  ENTITIES MAKE NO WARRANTIES, EXPRESSED OR IMPLIED, AND HEREBY
                  DISCLAIM AND NEGATE ALL OTHER WARRANTIES, INCLUDING WITHOUT
                  LIMITATION, IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY,
                  FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT OF
                  INTELLECTUAL PROPERTY OR ANY OTHER VIOLATION OF RIGHTS.
              </Typography>
                <Typography variant="body1" paragraph>
                  FURTHER, WITHOUT LIMITING THE FORGOING, KALAMOS CARE, AND THE
                  KALAMOS CARE ENTITIES DO NOT WARRANT OR MAKE ANY REPRESENTATIONS
                  CONCERNING THE ACCURACY, LIKELY RESULTS OF THE USE, OR
                  RELIABILITY OF THE MATERIALS AVAILABLE THROUGH THE SERVICES.
                  &nbsp;KALAMOS CARE DOES NOT WARRANT THAT (A) THE FUNCTIONS OR
                  SERVICES (INCLUDING BUT NOT LIMITED TO MECHANISMS FOR THE
                  DOWNLOADING OF MATERIAL) PROVIDED BY THE SERVICES WILL BE
                  EFFECTIVE, ACCURATE, RELIABLE, TIMELY, COMPLETE, UNINTERRUPTED,
                  SECURE, OR FREE OF ERRORS; THAT (B) THE SERVICES OR THE
                  SERVER(S) THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER
                  HARMFUL COMPONENTS. &nbsp;TO THE MAXIMUM EXTENT PERMITTED BY
                  APPLICABLE LAW, KALAMOS CARE DISCLAIMS RESPONSIBILITY FOR ANY
                  DAMAGE, LOSS, INJURY, OR LIABILITY WHATSOEVER RESULTING FROM THE
                  PROVISION OF ANY PERSONAL INFORMATION TO THE SERVICES OR ANY
                  UNAUTHORIZED USE OF OR ACCESS TO YOUR PERSONAL INFORMATION.
                  &nbsp;KALAMOS CARE MAKES NO WARRANTIES ABOUT THE SOFTWARE AND
                  FUNCTIONS MADE ACCESSIBLE THROUGH THE SERVICES OR ANY OTHER
                  SECURITY ASSOCIATED WITH THE TRANSMISSION OF PERSONAL
                  INFORMATION.
              </Typography>
                <Typography variant="body1" paragraph>
                  ALWAYS USE CAUTION WHEN GIVING OUT ANY PERSONALLY IDENTIFYING
                  INFORMATION.
              </Typography>
              </li>
              <li>
                <b>Limitations</b>
                <Typography variant="body1" paragraph>
                  IN NO EVENT SHALL KALAMOS CARE OR THE KALAMOS CARE ENTITIES BE
                  LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR
                  EXEMPLARY DAMAGES, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR
                  LOSS OF DATA OR PROFIT, OR DUE TO BUSINESS INTERRUPTION OR OTHER
                  INTANGIBLE LOSSES, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE,
                  STRICT LIABILITY OR OTHERWISE, ARISING OUT OF (1) THE USE OR
                  INABILITY TO USE THE SERVICES, MATERIALS OR INFORMATION
                  AVAILABLE THROUGH THE SERVICES, (II) UNAUTHORIZED ACCESS TO OR
                  ALTERATION OF YOUR TRANSMISSIONS OR PERSONAL DATA; OR (III) ANY
                  OTHER MATTER RELATING TO THE SERVICES, EVEN IF KALAMOS CARE OR
                  ANY KALAMOS CARE AUTHORIZED REPRESENTATIVE HAS BEEN NOTIFIED
                  ORALLY OR IN WRITING OF THE POSSIBILITY OF SUCH DAMAGE.
                  &nbsp;BECAUSE SOME JURISDICTIONS DO NOT PERMIT CERTAIN
                  LIMITATIONS OR DISCLAIMERS OF LIABILITY, THESE LIMITATIONS MAY
                  NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF
                  THE SERVICES OR WITH THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE
                  REMEDY IS TO DISCONTINUE USE OF THE SERVICES.
              </Typography>
              </li>
              <li>
                <b>Release</b>
                <Typography variant="body1" paragraph>
                  By using the Services you agree to release, discharge and hold
                  harmless Kalamos Care and the Kalamos Care Entities from any and
                  all losses, damages, rights, claims, actions of any kind and
                  injury (including death) arising out of or relating to the
                  Services or any act or omission by any person, including without
                  limitation, any dispute between you and any other person or
                  regarding any content posted on the site. If you are a
                  California resident, you waive California Civil Code §1542,
                  which says: “A general release does not extend to claims which
                  the creditor does not know or suspect to exist in his favor at
                  the time of executing the release, which if known by him must
                  have materially affected his settlement with the debtor.” This
                  release includes, without limitation, any claim resulting from
                  delay and the criminal acts of others.
              </Typography>
              </li>
              <li>
                <b>Revisions and Errors</b>
                <Typography variant="body1" paragraph>
                  The materials available through the Services could include
                  technical, typographical, photographic errors, or other
                  inadvertent errors or inaccuracies. We reserve the right, but
                  without obligation, to make changes to document names and
                  materials or to otherwise update or revise the Services from
                  time to time, though we are not obligated to do so. Kalamos Care
                  does not warrant that any of the materials available through the
                  Services are accurate, complete, or current.
              </Typography>
              </li>
              <li>
                <b>Communications with Us</b>
                <Typography variant="body1" paragraph>
                  We cannot guarantee the confidentiality of any communication or
                  material transmitted to us via the Services or e-mail.
                  Accordingly, we suggest that you use caution when transmitting
                  any information to us via such means. For example, you should
                  not include confidential information about you (such as your
                  Social Security number) or information about your health status,
                  in any e-mail that you send to us. &nbsp;We hereby expressly
                  disclaim any liability for damages resulting from third party
                  interception of your communications with us via the Services or
                  via electronic mail. If you choose to send us any information
                  via the Services or via e-mail, you do so solely at your own
                  risk.
              </Typography>
              </li>
              <li>
                <b>Indemnification</b>
                <Typography variant="body1" paragraph>
                  By accessing or using the Services or any materials or
                  information available through the Services, you agree to
                  indemnify, hold harmless and defend Kalamos Care and the Kalamos
                  Care Entities from any claims, demands, damages, losses,
                  liabilities, and all costs and expenses of defense, including
                  but not limited to, attorneys' and expert fees, arising out of
                  or resulting directly or indirectly from a claim by a third
                  party that arises in connection with your use of the Services or
                  any materials or information available through the Services,
                  including without limitation, any content posted to or
                  transmitted through the Services, or publicly distributed on the
                  web, your use of the Services, your connection to the Services,
                  your violation of the Terms of Use or applicable law or your
                  violation of any rights of another.&nbsp;&nbsp;
              </Typography>
              </li>
              <li>
                <b>International</b>
                <Typography variant="body1" paragraph>
                  We make no representation that information provided by the
                  Services is appropriate or available for use outside the United
                  States. Those who choose to access the Services from outside the
                  United States do so on their own initiative and at their own
                  risk and are responsible for compliance with all applicable laws
                  and regulations. &nbsp;By using the Services, you consent to
                  having any information you provide to us transferred to and
                  processed in the United States.
              </Typography>
              </li>
              <li>
                <b>Arbitration Agreement</b>
                <Typography variant="body1" paragraph>
                  PLEASE READ THIS SECTION CAREFULLY AS IT AFFECTS YOUR RIGHTS.
              </Typography>
                <Typography variant="body1" paragraph>
                  Most user concerns can be resolved quickly and to the user’s
                  satisfaction by emailing user support. In the unlikely event
                  that our user care team is unable to resolve a complaint you may
                  have (or if Kalamos Care has not been able to resolve a dispute
                  it has with you after attempting to do so informally), we each
                  agree to arbitrate all disputes and claims between us. This
                  agreement to arbitrate is intended to be broadly interpreted. It
                  includes, but is not limited to:
              </Typography>
                <ul>
                  <li>
                    claims arising out of or relating to any aspect of the
                    relationship between us, whether based in contract, tort,
                    statute, fraud, misrepresentation or any other legal theory;
                </li>
                  <li>
                    claims that arose before this or any prior agreements
                    (including, but not limited to, claims relating to
                    advertising);
                </li>
                  <li>
                    claims that are currently the subject of purported class
                    action litigation in which you are not a member of a certified
                    class; and
                </li>
                  <li>
                    claims that may arise after the termination of these Terms of
                    Use.
                </li>
                </ul>
                <Typography variant="body1" paragraph>
                  References to ‘Kalamos Care’, ‘you’, and ‘us’ include our
                  respective subsidiaries, affiliates, agents, employees,
                  predecessors in interest, successors, and assigns, as well as
                  all authorized or unauthorized users or beneficiaries of
                  services or devices under this or prior agreements between us.
                  Notwithstanding the foregoing, either party may bring an
                  individual action in small claims court. This arbitration
                  agreement does not preclude you from bringing issues to the
                  attention of federal, state or local agencies, including, for
                  example, the Federal Communications Commission. Such agencies
                  can, if the law allows, seek relief against us on your behalf.
                  You agree that, by entering into these Terms of Use, you and
                  Kalamos Care are each waiving the right to a trial by jury or to
                  participate in a class action. &nbsp;These Terms of Use evidence
                  a transaction in the interstate commerce, and thus the Federal
                  Arbitration Act governs the interpretation and enforcement of
                  this provision. This arbitration provision shall survive
                  termination of these Terms of Use.
              </Typography>
                <Typography variant="body1" paragraph>
                  A party who intends to seek arbitration must first send to the
                  other, by certified mail, a written Notice of Dispute
                  (‘Notice’). &nbsp;The Notice to Kalamos Care should be addressed
                  to Kalamos Care, Inc. at [__________] (‘Arbitration Notice
                  Address’). &nbsp;The Notice must (a) describe the nature and
                  basis of the claim or dispute; and (b) set forth the specific
                  relief sought (‘Demand’). &nbsp;If Kalamos Care and you do not
                  reach an agreement to resolve the claim within sixty (60)
                  calendar days after the Notice is received, you or Kalamos Care
                  may commence an arbitration proceeding. &nbsp;During the
                  arbitration, the amount of any settlement offer made by Kalamos
                  Care or you shall not be disclosed to the arbitrator until after
                  the arbitrator determines the amount, if any, to which you or
                  Kalamos Care is entitled.
              </Typography>
                <Typography variant="body1" paragraph>
                  The arbitration will be governed by the Commercial Arbitration
                  Rules and the Supplementary Procedures for Consumer Related
                  Disputes (collectively, ‘AAA Rules’) of the American Arbitration
                  Association (‘AAA’), as modified by these Terms of Use, and will
                  be administered by the AAA. &nbsp;The AAA Rules are available
                  online at adr.org, by calling the AAA at 1-800-778-7879, or by
                  writing to the Arbitration Notice Address. The arbitrator is
                  bound by the terms of these Terms. All issues are for the
                  arbitrator to decide, including, but not limited to, issues
                  relating to the scope, enforceability, and arbitrability of the
                  arbitration provision. Unless Kalamos Care and you agree
                  otherwise, any arbitration hearings will take place in a
                  reasonably convenient location for both parties with due
                  consideration of their ability to travel and other pertinent
                  circumstances. &nbsp;If the parties are unable to agree on a
                  location, the determination shall be made by AAA. If your claim
                  is for $10,000 or less, we agree that you may choose whether the
                  arbitration will be conducted solely on the basis of documents
                  submitted to the arbitrator, through a telephonic hearing, or by
                  an in-person hearing as established by the AAA Rules. If your
                  claim exceeds $10,000, the right to a hearing will be determined
                  by the AAA Rules. Regardless of the manner in which the
                  arbitration is conducted, the arbitrator shall issue a reasoned
                  written decision sufficient to explain the essential findings
                  and conclusions on which the award is based. &nbsp;Kalamos Care
                  will pay all AAA filing, administration, and arbitrator fees for
                  any arbitration initiated in accordance with the AAA Rules.
                  However, if you initiate an arbitration in which you seek more
                  than $75,000 in damages, the payment of these fees will be
                  governed by the AAA Rules.
              </Typography>
                <Typography variant="body1" paragraph>
                  The arbitrator may make rulings and resolve disputes as to the
                  payment and reimbursement of fees and expenses at any time
                  during the proceeding and upon request from either party made
                  within 14 days of the arbitrator's ruling on the merits.
              </Typography>
                <Typography variant="body1" paragraph>
                  The arbitrator may award declaratory or injunctive relief only
                  in favor of the individual party seeking relief and only to the
                  extent necessary to provide relief warranted by that party's
                  individual claim. YOU AND KALAMOS CARE AGREE THAT EACH MAY BRING
                  CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL
                  CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY
                  PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. &nbsp;Further,
                  unless both you and Kalamos Care agree otherwise, the arbitrator
                  may not consolidate more than one person's claims, and may not
                  otherwise preside over any form of a representative or class
                  proceeding. If this specific provision is found to be
                  unenforceable, then the entirety of this arbitration provision
                  shall be null and void.
              </Typography>
                <Typography variant="body1" paragraph>
                  Notwithstanding any provision in these Terms to the contrary, we
                  agree that if Kalamos Care makes any future change to this
                  arbitration provision (other than a change to the Arbitration
                  Notice Address) while you are a user of the Services, you may
                  reject any such change by sending us written notice within
                  thirty (30) calendar days of the change to the Arbitration
                  Notice Address provided above. &nbsp;By rejecting any future
                  change, you are agreeing that you will arbitrate any dispute
                  between us in accordance with the language of this provision.
              </Typography>
              </li>
              <li>
                <b>Governing Law</b>
                <Typography variant="body1" paragraph>
                  Any claim relating to the Services, or your interactions with us
                  through the Services, shall be governed by the laws of the State
                  of New York without giving effect to any of its provisions that
                  would cause the laws of another jurisdiction to apply. &nbsp;You
                  and Kalamos Care agree to submit to the personal and exclusive
                  jurisdiction of the state and federal courts located within New
                  York County, New York. EACH OF THE PARTIES HEREBY KNOWINGLY,
                  VOLUNTARILY AND INTENTIONALLY WAIVES ANY RIGHT IT MAY HAVE TO A
                  TRIAL BY JURY IN RESPECT OF ANY LITIGATION (INCLUDING BUT NOT
                  LIMITED TO ANY CLAIMS, COUNTERCLAIMS, CROSS-CLAIMS, OR THIRD
                  PARTY CLAIMS) ARISING OUT OF, UNDER OR IN CONNECTION WITH THESE
                  TERMS OF USE. FURTHER, EACH PARTY HERETO CERTIFIES THAT NO
                  REPRESENTATIVE OR AGENT OF EITHER PARTY HAS REPRESENTED,
                  EXPRESSLY OR OTHERWISE, THAT SUCH PARTY WOULD NOT IN THE EVENT
                  OF SUCH LITIGATION, SEEK TO ENFORCE THIS WAIVER OF RIGHT TO JURY
                  TRIAL PROVISION. &nbsp;Any claim or cause of action arising out
                  of or related to use of the Services or the Terms must be filed
                  within one (1) year after such claim or cause of action arose or
                  be forever barred. A printed version of this agreement and of
                  any notice given in electronic form will be admissible in
                  judicial or administrative proceedings based upon or relating to
                  this agreement to the same extent and subject to the same
                  conditions as other business documents and records originally
                  generated and maintained in printed form.
              </Typography>
              </li>
              <li>
                <b>Miscellaneous</b>
                <Typography variant="body1" paragraph>
                  You may not assign or transfer these Terms of Use in whole or in
                  part to any third party without the prior written consent of
                  Kalamos Care. &nbsp;These Terms of Use shall bind and inure to
                  the benefit of the parties to these Terms of Use and their
                  respective successors, permitted transferees, and permitted
                  assigns. &nbsp;Kalamos Care and you are independent contractors
                  and are not partners, joint venturers, agents, employees or
                  representatives of the other party. These Terms of Use contain
                  the entire understanding of the parties with respect to the
                  transactions and matters contemplated hereby, supersede all
                  previous communications, understandings and agreements (whether
                  oral or written) other than any click-through or end user
                  license agreement provided by Kalamos Care, and cannot be
                  amended except by a writing signed by both parties or by Kalamos
                  Care’s posting of an amended version of these Terms of Use
                  available through the Services. &nbsp;The headings and captions
                  used in these Terms of Use are used for convenience only and are
                  not to be considered in construing or interpreting these Terms
                  of Use. If any part of these Terms of Use is held to be
                  unlawful, void, or unenforceable, that part will be deemed
                  severable and shall not affect the validity and enforceability
                  of the remaining provisions. These Terms of Use shall continue
                  to apply with respect to any access or use you have made of the
                  Services even after such access or use terminates. Kalamos Care
                  reserves the right, in its sole discretion, to restrict, suspend
                  and/or terminate your access to all or any part of the Website
                  at any time without prior notice or liability for any reason or
                  no reason. Kalamos Care may change, suspend, discontinue or
                  disable all or any aspect of the Service at any time, including
                  the availability of any feature, database, or service, without
                  prior notice or liability.
              </Typography>
              </li>
            </Typography>
          </ol>
          <Typography variant="body1" paragraph>
            If you have any questions about these Terms of Use, please contact
            support@kalamos.care.
        </Typography>
          <Typography variant="body1" paragraph>
            All Rights Reserved.
        </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
