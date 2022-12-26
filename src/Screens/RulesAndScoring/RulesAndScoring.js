import { useNavigation } from "@react-navigation/native"
import {
  Box,
  Center,
  Icon,
  Image,
  ScrollView,
  Text,
  View,
  IconButton
} from "native-base"
import React from "react"
import { SafeAreaView } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"

const RulesAndScroing = () => {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 0, backgroundColor: "#F1F2F2", height: "100%",paddingTop:20 }}>
      <SafeAreaView>
        <Box px={3} flexDirection="row">
          <IconButton
            onPress={() => navigation.goBack()}
            icon={
              <Icon color="#7D9E49" as={Ionicons} name="chevron-back" />
            }
          />
          <Image
            ml="auto"
            h="20"
            w="120"
            resizeMode="center"
            source={require("../../assets/images/SplashLogo.png")}
            alt=""
          />
        </Box>
        <ScrollView>
          <Center px="1">
            <Box w="100%" pt={4} p="10px">


              <Box ml={2}>
                <Text
                  // letterSpacing="5"
                  color="#225529"
                  fontFamily="Proxima Nova Condensed"
                  fontSize="28"
                  fontWeight="400"
                >
                  Rules and Scoring
                </Text>
              </Box>
              <Box ml={2}>
                <Text mb="5" mt="3">
                  Last Updated: October 3, 2022
                </Text>
                <Text>
                  Please read these Terms of Service (“this Agreement”) between
                  Linx League LLC (“Linx”, “we”, “us” or “our”) and you, an
                  individual user (“you” or “your”). This Agreement applies to
                  and governs your use of (a) www.linxleague.com and all
                  corresponding subdomains, web pages and websites associated
                  with the foregoing URL (the “Site”), (b) the Linx League
                  mobile application (the “App”), and (c) any other content,
                  applications, systems, features, functionality, software,
                  information, products and services offered by us that link to
                  this Agreement (collectively the “Services”). By using the
                  SITE, APP OR SERVICES, DOWNLOADING THE APP, COMPLETING THE
                  REGISTRATION PROCESS AND/OR CLICKING THE “I ACCEPT” BUTTON,
                  you understand and agree that (i) you have read and agree to
                  be bound by this Agreement, and (ii) you are of legal age to
                  form a binding contract with Linx. Your use of, and
                  participation in, certain Services may be subject to
                  additional terms (“Additional Terms”), and such Additional
                  Terms will either be listed in this Agreement or will be
                  presented to you for your acceptance when you sign up to use
                  the additional Service. To the extent that there is a conflict
                  between this Agreement and the Additional Terms, the
                  Additional Terms shall govern. Please be aware that section 17
                  of this agreement, below, contains provisions governing how
                  claims that you and we have against each other are resolved,
                  including, without limitation, any claims that arose or were
                  asserted prior to the effective date of this agreement. In
                  particular, it contains an arbitration agreement which will,
                  with limited exceptions, require disputes between us to be
                  submitted to binding and final arbitration. Unless you opt out
                  of the arbitration agreement: (1) you will only be permitted
                  to pursue claims and seek relief against us on an individual
                  basis, not as a plaintiff or class member in any class or
                  representative action or proceeding; and (2) you are waiving
                  your right to seek relief in a court of law and to have a jury
                  trial on your claims. If you subscribe to Linx for a term (the
                  “Initial Term”), then your subscription will be automatically
                  renewed for additional periods of the same duration as the
                  Initial Term at Linx’ then-current fee for such services
                  unless you decline to renew your subscription in accordance
                  with section 13. 1. Term This Agreement shall commence as of
                  the date you accept it (in accordance with the preamble) and
                  remain in full force and effect while you use the Services,
                  unless terminated earlier in accordance with the terms herein.
                  You may terminate your use of or registration for the Services
                  at any time by closing your User Account (as defined below)
                  and notifying us of your intent to terminate. Linx League may
                  terminate your use of or registration for the Services at any
                  time, for any or no reason, with or without prior notice or
                  explanation, and without liability or obligation to you or any
                  third party, including in the event you have breached this
                  Agreement, or if we are required to by applicable law. 2.
                  Modifications We may modify this Agreement at any time, for
                  any reason, in our sole discretion. If we modify this
                  Agreement, we will provide notice on the Site and within the
                  App. We may also send you notice to the email address you
                  provided. You are solely responsible for providing us with a
                  current and accurate email address. In certain circumstances,
                  we may require you to provide additional consent before any
                  further use of the Site, App or Services is permitted. We
                  recommend that you check back frequently and review this
                  Agreement regularly so you are aware of the most current
                  rights and obligations that apply to you. 3. Compliance By
                  using the Services, you represent and warrant that (a) you are
                  13 years of age or older and acknowledge and agree that
                  features, activities and other aspects of the Services may be
                  subject to heightened age and/or other eligibility
                  requirements; (b) your use of the Services does not violate
                  any applicable law, rule or regulation; and (c) you shall make
                  timely and satisfactory payment for any Services purchased by
                  you. If you provide information that is untrue, inaccurate,
                  incomplete, or we suspect that such information is untrue,
                  inaccurate, or incomplete, we may suspend or terminate your
                  registration (in whole or in part) and refuse any and all
                  current or future use of the Services (or any portion
                  thereof), in its sole discretion, with or without notice to
                  you, and without liability or obligation to you. 4. User
                  Registration In order to access and use the Services, we may
                  require that you register for an account (“User Account”),
                  create a unique username and password combination (“User
                  Credentials”), and provide certain additional information, as
                  prompted by our user registration process. You represent and
                  warrant that all registration and account information you
                  submit is truthful and accurate and that you shall maintain
                  and promptly update the accuracy of such information. You may
                  only have one User Account, and are responsible for
                  maintaining the strict confidentiality of your User
                  Credentials. You are responsible for any access to, or use of,
                  the Services by you or any person or entity using your User
                  Credentials or the device you use to access and use the
                  Services (a “Device”), whether or not such access or use has
                  been authorized by you or on your behalf, and whether or not
                  such person or entity is your employee or agent, including,
                  without limitation, any fee-­based transactions. It is
                  therefore critical that you do not share your User Credentials
                  with anyone. You agree to immediately notify Linx of any
                  unauthorized use of your User Credentials, User Account and/or
                  Device, or any other breach of security, including, without
                  limitation, if your Device is lost or stolen. It is your
                  responsibility to (a) control the dissemination and use of
                  your User Credentials, User Account, and Device; (b) update,
                  maintain, and control access to your User Credentials, User
                  Account, and Device; and (c) cancel your User Account. We
                  reserve the right to deny access, use, and registration
                  privileges to anyone if we believe there is a question about
                  the identity of the person trying to access any account or
                  element of the Services. Linx shall not be responsible for any
                  loss or damage arising from your failure to comply with this
                  Section 4. 5. Third-Party Platforms and Services Some of the
                  Services may be dependent on and/or interoperate with third­
                  party owned and/or operated platforms and services (e.g.,
                  Facebook, Twitter, Google Play, PayPal, LinkedIn, Apple, etc.)
                  (each, a “Third-Party Platform”) and may require that you be a
                  registered member of such Third-Party Platforms and provide
                  certain account credentials and other information in order to
                  access such Services. Such Third-Party Platforms, in addition
                  to providing application hosting, content distribution,
                  support and other related services, may provide us with
                  certain additional information about you. No Third-Party
                  Platform through which you purchase the Services shall furnish
                  any maintenance or support with respect to the Services, nor
                  shall they address any third-party claims related to your use
                  of the Services. The Services may include advertisements,
                  which may be targeted to content or information on the
                  Service, or other information. The types and extent of
                  advertising by Linx on the Services are subject to change. In
                  consideration for Linx granting you access to and use of the
                  Services, you agree that Linx and its third-party providers
                  and partners may place such advertising in connection with the
                  display of content or information submitted by you or others.
                  6. Personal Information We respect your privacy and the use
                  and protection of your personally identifiable information. In
                  the course of your use of the Services, you may be required to
                  provide certain personal or personalized information to us
                  (such information referred to hereinafter as “Personal
                  Information”). Our information collection and use policies
                  with respect to the privacy of such Personal Information are
                  set forth in the Privacy Policy
                  (https://LinLeague.com/legal/privacy-policy/). We encourage
                  you to read the Privacy Policy, and to use it to help make
                  informed decisions. You acknowledge and agree that you are
                  solely responsible for the accuracy and content of Personal
                  Information. 7. Proprietary Rights 7.1. License. Subject to
                  your compliance with this Agreement, Linx grants you a
                  limited, non-exclusive, non-transferable, non-sublicensable,
                  revocable license to download, install, and use the App on a
                  single Device that you own or control and to run the App
                  solely for your own personal or internal business purposes.
                  Furthermore, with respect to any App accessed through or
                  downloaded from the Apple App Store (an “Apple App Store
                  Sourced Application”), you will only use the Apple App Store
                  Sourced Application (i) on an Apple-branded product that runs
                  Apple’s proprietary operating system, and (ii) as permitted by
                  the “Usage Rules” set forth in the Apple App Store Terms of
                  Service. 7.2 Ownership. As between you and Linx, Linx
                  exclusively owns all right, title and interest in and to the
                  Site, App, and Services, and all content contained and/or made
                  available on, through or in connection therewith (“Content”).
                  The Site, App, Services, and Content are protected, without
                  limitation, under U.S. Federal and State, as well as
                  applicable foreign laws, rules, regulations and treaties. 7.3.
                  Restrictions. You must not alter, delete, or conceal any
                  copyright, trademark, service mark or other notices contained
                  on the Site, App, or Services, including, without limitation,
                  notices on any Content you transmit, download, display, print,
                  stream, or reproduce from the Services. Except as expressly
                  authorized by Linx or as set forth in Additional Terms (e.g.,
                  Services that allow for the use of embeddable or viral
                  features, applications, etc.), you shall not, nor shall you
                  allow any third-party (whether or not for your benefit or
                  otherwise) to, reproduce, modify, create derivative works
                  from, display, perform, publish, distribute, disseminate,
                  broadcast or circulate to any third party (including, without
                  limitation, on or via a third-party website or platform), or
                  otherwise use, the App or any Content without the express,
                  prior written consent of Linx League (or its owner, if Linx is
                  not the owner). Moreover, the framing or scraping of or
                  in­line linking to the Site, Services, or any Content
                  contained thereon and/or the use of web crawler, spidering or
                  other automated means to access, copy, index, process and/or
                  store any Content made available on or through the Services
                  other than as expressly authorized by us in writing in advance
                  is prohibited. You further agree to abide by exclusionary
                  protocols (e.g., Robots.txt, Automated Content Access Protocol
                  (ACAP), etc.) used in connection with the Services. 8. User
                  Conduct You are solely responsible for your conduct in
                  connection with the Services. We want to keep the Services
                  safe and enjoyable for everyone and the use of the Services
                  for unlawful or harmful activities is not allowed. You
                  represent, warrant and agree that, while using the Services,
                  you shall not: 8.1 Intentionally or unintentionally engage in
                  or encourage conduct that would violate any applicable law or
                  rule, give rise to civil liability, or violate or infringe
                  upon any intellectual property, proprietary, privacy, moral,
                  publicity or other rights of ours or of any other person or
                  entity; 8.2 Submit, post, email, display, transmit, or
                  otherwise make available on, through, or in connection with
                  the Services any material that: (i) is, illegal, harmful,
                  threatening, defamatory, deceptive, fraudulent, invasive of
                  another’s privacy or publicity rights, harassing, contains
                  explicit or graphic imagery or descriptions of excessive
                  violence or sexual acts, links to adult content, or promotes
                  discrimination, hatred or harm of any kind against any group
                  or individual; (ii) makes available private information, or
                  creates a security or privacy risk for any other person or
                  entity; (iii) contains a software virus, worm, spyware, Trojan
                  horse or other computer code, file or program designed to
                  interrupt, impair, destroy or limit the functionality of any
                  property; or (iv) is false, incorrect, misleading, or
                  fraudulent information, including, without limitation, as it
                  pertains to any golf-­related conduct, activities,
                  achievements, initiatives, promotions, and/or opportunities;
                  8.3 Intentionally or unintentionally engage in or encourage
                  conduct that adversely affects Linx, Linx’ affiliates, or any
                  of their respective successors and assigns, directors,
                  officers, employees, representatives, agents, licensors,
                  advertisers, suppliers, operators or service providers, the
                  Services, or causes duress, distress, or discomfort to us or
                  anyone else, or discourages any person or entity from using
                  all or any portion, features or functions of the Services, or
                  from advertising, linking or becoming a supplier to us in
                  connection with the Services; 8.4 Without Linx’ written
                  agreement, use the Services for commercial purposes, whether
                  compensated or not; 8.5 Modify, disrupt, impair, alter or
                  interfere with the use, features, function, operation or
                  maintenance of the Services or the rights or use or enjoyment
                  of the Services by any other user; 8.6 Impersonate any person
                  or entity, including, without limitation, a Linx League
                  official, or falsely state or otherwise represent your
                  affiliation with a person, entity or User Posting (as defined
                  herein), transmit or otherwise make available on, through or
                  in connection with the Services false or misleading
                  indications of origin, information or statements of fact; 8.7
                  Forge headers or otherwise manipulate identifiers in order to
                  disguise the origin of any content transmitted on, through or
                  in connection with the Services, including User Postings (as
                  defined herein); 8.8 Solicit passwords or personal identifying
                  information for commercial or unlawful purposes from other
                  users or engage in spamming, flooding, harvesting of email
                  addresses or other personal information, “spidering”, “screen
                  scraping”, “phishing”, “database scraping”, or any other
                  activity with the purposes of obtaining lists of users or
                  other information; 8.9 Modify, reverse engineer, decompile or
                  disassemble any part of the Services, whether in whole or in
                  part, or create any derivative works from any part of the
                  Services, or encourage, assist or authorize any other person
                  to do so; 8.10 Use the Services in a country that is subject
                  to a U.S. Government embargo, or that has been designated by
                  the U.S. Government as a “terrorist supporting” country; or
                  8.11 Use the services if you are on any U.S. Government list
                  of prohibited or restricted parties. 9. Investigations. Linx
                  may investigate and take legal action against anyone who, in
                  Linx’ sole discretion, violates, or is suspected of violating,
                  this Agreement, including, without limitation, reporting to
                  law enforcement authorities. You acknowledge, consent, and
                  agree that Linx may access, preserve and disclose your account
                  and registration information and any other content or
                  information if required to do so by law or if based on a good
                  faith belief that such access, preservation or disclosure is
                  reasonably necessary to (i) comply with the legal process;
                  (ii) enforce this Agreement; (iii) respond to claims that any
                  content or information violates the rights of any third party;
                  (iv) respond to your requests for customer or technical
                  service; or (v) protect the rights, property or personal
                  safety of Linx, its users or any third parties. Linx League
                  also reserves the right to remove the Services from
                  Third-Party Platforms, which would limit your ability to
                  re-download the Services. 10. Export You may not use, export,
                  import, or transfer the App except as authorized by U.S. law,
                  the laws of the jurisdiction in which you obtained the App,
                  and any other applicable laws. In particular, but without
                  limitation, the App may not be exported or re-exported (a)
                  into any U.S. embargoed countries, or (b) to anyone on the
                  U.S. Treasury Department’s list of Specially Designated
                  Nationals or the U.S. Department of Commerce’s Denied Persons
                  List or Entity List. By using the App, you represent and
                  warrant that (i) you are not located in a country that is
                  subject to a U.S. Government embargo, or that has been
                  designated by the U.S. Government as a “terrorist supporting”
                  country, and (ii) you are not listed on any U.S. Government
                  list of prohibited or restricted parties. You also will not
                  use the App for any purpose prohibited by U.S. law. You
                  acknowledge and agree that App and the Services are subject to
                  U.S. export control laws and regulations. You shall comply
                  with these laws and regulations and shall not, without prior
                  U.S. government authorization, export, re-export, or transfer
                  Linx’ products, services or technology, either directly or
                  indirectly, to any country in violation of such laws and
                  regulations. 11. User Postings 11.1 Defined; Acknowledgements.
                  The Services may provide you and other users with an
                  opportunity to participate in feeds, forums, communities and
                  other message, comment and communication features and
                  functionalities and may provide you with the opportunity to
                  submit, post, email, display, transmit or otherwise make
                  available comments, reviews, links, materials, ideas,
                  opinions, messages, user information, and other information
                  via the Services (each, a “User Posting”, and collectively,
                  “User Postings”). The term “User Posting” also includes all of
                  the information you submit or we may receive that is related
                  to your User Posting. When you submit User Postings you may
                  also be asked to provide information about you and your
                  submission. This may include, without limitation, such things
                  as your User Credentials, a descriptive title, information
                  about the User Posting, your location and/or similar
                  information. You further acknowledge and agree that all User
                  Postings made by means of or in connection with any portion of
                  the Services are public and that (a) you have no expectation
                  of privacy in any User Posting, and (b) no confidential,
                  fiduciary, contractually implied or other relationship is
                  created between you and Linx League by reason of your
                  transmitting a User Posting to any area of, or in connection
                  with, the Services. 11.2 Responsibility; Liability. You
                  understand, acknowledge and agree that all User Postings are
                  the sole responsibility of the person from which such User
                  Postings originated. This means that you are solely and
                  entirely responsible for the consequences of all User Postings
                  that you submit, upload, post, email, display, transmit or
                  otherwise make available. User Postings do not reflect the
                  views of Linx its affiliates, or any of their respective
                  successors and assigns, directors, officers, employees,
                  representatives or agents. You understand that by using the
                  Services, you may be exposed to other user’s User Postings
                  that could be offensive, indecent or objectionable and, as
                  such, Linx League does not guarantee the accuracy, integrity,
                  quality, or content of any User Postings. Under no
                  circumstances shall Linx be liable in any way for User
                  Postings, including, without limitation, errors or omissions
                  in any User Postings, or any loss or damage of any kind
                  incurred as a result of any User Postings submitted, uploaded,
                  posted, emailed, displayed, transmitted or otherwise made
                  available. 11.3 Usage; Restrictions. The Services, including,
                  without limitation, all User Posting features and
                  functionality, is for personal purposes only and you may not
                  submit, post, email, display, transmit or otherwise make
                  available, in any manner, any User Posting that we deem to be
                  an Unauthorized Posting (as defined herein). We have the
                  right, but not the obligation, to review any User Posting and
                  to delete, remove, move, edit or reject, without notice to
                  you, for any reason or for no reason, any User Posting,
                  including, without limitation, any Unauthorized Posting;
                  provided, however, that Linx League shall have no obligation
                  or liability to you or any third-party for failure to do so or
                  for doing so in any particular manner. As used herein, the
                  term “Unauthorized Posting” means any User Posting that is or
                  may be construed as violating this Agreement, including,
                  without limitation, Section 8 herein, or is deemed to be
                  unacceptable to Linx, as determined in Linx’s sole discretion.
                  11.4 License; Usage. In connection with all User Postings you
                  submit, post, email, display, transmit or otherwise make
                  available, you grant to Linx the unlimited, worldwide,
                  non-­exclusive, irrevocable, perpetual and royalty-­free
                  right, license, authorization, and permission, in any form or
                  format, on or through any media or medium and with any
                  technology or devices now known or hereafter developed or
                  discovered, in whole or in part, to host, cache, store,
                  maintain, use, reproduce, distribute, display, exhibit,
                  perform, publish, broadcast, transmit, modify, prepare
                  derivative works of, adapt, reformat, translate, and otherwise
                  exploit all or any portion of your User Posting on the
                  Services and any other websites, channels, services, and other
                  distribution platforms, whether currently existing or
                  developed in the future, for any purpose whatsoever
                  (including, without limitation, for any promotional purposes)
                  without accounting, notification, credit or other obligation
                  to you, and the right to license and sub­license and authorize
                  others to exercise any of the rights granted hereunder to Linx
                  League, in our sole discretion. For the avoidance of doubt,
                  the rights, licenses and privileges described in this
                  Agreement and granted to Linx League shall commence
                  immediately upon submission of your User Posting and shall
                  continue thereafter perpetually and indefinitely, regardless
                  of whether you use the Services as a registered user or not.
                  11.5 Rights; Representations. Linx League does not acquire any
                  title or ownership rights in the User Postings that you submit
                  and/or make available. After you submit, post, email, display,
                  transmit or otherwise make available any User Posting, you
                  continue to retain any such rights that you may have in such
                  User Posting, subject to the rights, licenses and privileges
                  granted herein. You also represent, warrant and covenant that
                  you own the User Posting posted by you or otherwise have the
                  right to grant the rights, licenses and privileges described
                  in this Agreement and to perform and comply with all of the
                  requirements set forth herein. 11.6 California Removal Rights.
                  Registered users of Services who are California residents and
                  are under 18 years of age may request and obtain removal of
                  User Postings located on the Services that they themselves
                  post by emailing us at: support@linxleague.com. All requests
                  must be labeled “California Removal Request” on the email
                  subject line. All requests must provide a description of the
                  content or information in your User Posting that you want
                  removed and information reasonably sufficient to permit us to
                  locate the material and, so that we can process your request
                  and contact you if we have questions, include your registered
                  username, name, street address, city, state, zip code and
                  email address (your street address is optional if you wish to
                  receive a response to your request via email), include the
                  name and URL (if applicable) of the website, application or
                  other interactive service and indicate your preference on how
                  our response to your request should be sent (email or postal
                  mail). We shall not accept requests via postal mail, telephone
                  or facsimile. We are not responsible for notices that are not
                  labeled or sent properly, and may not be able to respond if
                  you do not provide complete information. We may also provide
                  you the ability to remove individual specific User Postings
                  that are comments by navigating to the comment, selecting the
                  delete option when you hover over the right-hand side of the
                  comment with your cursor and verifying the deletion request.
                  Please note that any requests for removal do not ensure
                  complete or comprehensive removal of the Content or
                  information from the Services. For example, content that you
                  have posted may be republished or reposted by another User or
                  third party. 12. Digital Millennium Copyright Act Linx League
                  respects the intellectual property of others, and asks you to
                  do the same. Linx League will (i) remove or disable access to
                  material made available on or through the Services that Linx
                  League believes in good faith, upon notice from an
                  intellectual property owner or their agent, to be infringing
                  the intellectual property of a third party; and (ii) remove
                  any User Postings uploaded to the Services by “repeat
                  infringers.” Linx League will consider you a “repeat
                  infringer” if Linx has received more than two takedown notices
                  compliant with the provisions of 17 U.S.C. § 512 with respect
                  to your User Postings. Linx League has discretion, however, to
                  terminate your User Account after receipt of a single
                  notification of claimed infringement or upon Linx’ own
                  determination. If you believe that any content made available
                  on or through the Services has been used or exploited in a
                  manner that infringes an intellectual property right you own
                  or control, then promptly send a “Notification of Claimed
                  Infringement” containing substantially the following
                  information to Linx’s Designated Agent identified below: -A
                  physical or electronic signature of a person authorized to act
                  on behalf of the owner of the work(s) that is allegedly
                  infringed; -Identification of works or materials being
                  infringed, or, if multiple works are covered by a single
                  notification, then a representative list of such works;
                  Identification of the specific material that is claimed to be
                  infringing or to be the subject of infringing activity and
                  that is to be removed or access to which is to be disabled,
                  and information reasonably sufficient to permit Linx League to
                  locate the material; -Information reasonably sufficient to
                  permit Linx League to contact you, such as an address,
                  telephone number and, if available, an email address at which
                  you may be contacted; -A statement that you have a good faith
                  belief that the use of the material in the manner complained
                  of is not authorized by the copyright owner, its agent or the
                  law; -and A statement that the information in the notification
                  is accurate, and under penalty of perjury, that you are
                  authorized to act on behalf of the owner of an exclusive right
                  that is allegedly infringed. Written notification of claimed
                  infringement must be submitted to the following Designated
                  Agent: Linx League LLC Attention: Harvard Business Services,
                  Inc. 16192 Coastal Highway, Lewes, DE 19958 Linx League may
                  share the Notification of Claimed Infringement with the user
                  alleged to have infringed a right you own or control, and you
                  hereby consent to Linx League making such disclosure. If you
                  receive a notification from Linx that material made available
                  by you on or through the Services has been the subject of a
                  Notification of Claimed Infringement, then you will have the
                  right to provide Linx League a “Counter Notification.” To be
                  effective, a Counter Notification must be in writing, provided
                  to Linx’ Designated Agent through one of the methods
                  identified in this section, and include substantially the
                  following information: -Your physical or electronic signature;
                  -Identification of the material that has been removed or to
                  which access has been disabled and the location at which the
                  material appeared before it was removed or access to it was
                  disabled; -A statement under penalty of perjury that you have
                  a good faith belief that the material was removed or disabled
                  as a result of mistake or misidentification of the material to
                  be removed or disabled; and -Your name, address and telephone
                  number, and a statement that you consent to the jurisdiction
                  of Federal District Court for the judicial district in which
                  the address is located, or if your address is outside of the
                  United States, then for any judicial district in which --Linx
                  League may be found, and that you will accept service of
                  process from the person who provided notification of
                  infringement or an agent of such person. If you submit a
                  Counter Notification to Linx League in response to a
                  Notification of Claimed Infringement, then Linx will promptly
                  provide the person who provided the Notification of Claimed
                  Infringement with a copy of your Counter Notification and
                  inform that person that Linx will replace the removed User
                  Postings or cease disabling access to the User Postings in 10
                  business days following receipt of the Counter Notification,
                  unless Linx’ Designated Agent receives notice from the party
                  that submitted the Notification of Claimed Infringement that
                  such person has filed an action seeking a court order to
                  restrain you from engaging in infringing activity relating to
                  the material on the Services. The Copyright Act provides that
                  any person who knowingly materially misrepresents under
                  [Section 512 of the Copyright Act (17 U.S.C. § 512)] (1) that
                  material or activity is infringing, or (2) that material or
                  activity was removed or disabled by mistake or
                  misidentification, will be liable for any damages, including
                  costs and attorneys’ fees, incurred by the alleged infringer,
                  by any copyright owner or copyright owner’s authorized
                  licensee, or by a service provider, who is injured by such
                  misrepresentation, as the result of [Linx] relying upon such
                  misrepresentation in removing or disabling access to the
                  material or activity claimed to be infringing, or in replacing
                  the removed material or ceasing to disable access to it. Linx
                  League reserves the right to seek damages from any party that
                  submits a Notification of Claimed Infringement or Counter
                  Notification in violation of the law. 13. Payment, Pricing,
                  and Related Terms of Service 13.1 Premium Subscription. In
                  order to access certain features or functionality of the
                  Services (including the ability to access certain content),
                  you may be required to pay Premium membership fees. Premium
                  membership fees, along with any required taxes, may be paid on
                  a weekly, monthly or annual basis. All Premium membership fees
                  are payable in advance. You agree to pay the membership fees,
                  and other charges you incur in connection with your Linx
                  League account, whether on a one-time or subscription basis.
                  Linx League reserves the right to increase membership fees,
                  any associated taxes, or to institute new fees at any time
                  upon reasonable advance notice. 13.2 Other Fee-Based Services.
                  The Services include the ability to make certain other
                  fee-based transactions, including, without limitation, the
                  ability to purchase goods and services (“Fee-Based Services”).
                  In some cases, you may be required to make one payment to Linx
                  League (for example, a deposit) and one or more subsequent
                  payments to a third-party merchant or service provider to
                  complete the transaction. Additional Terms may apply to your
                  use of, access to and purchase of Fee-Based Services and will
                  be presented to you at the time of purchase. Additional Terms
                  may include terms and conditions between you and Linx League
                  or terms and conditions from third party merchants or service
                  providers who provide the Fee-Based Services. Such Additional
                  Terms are incorporated herein by reference. Unless otherwise
                  stated in the Additional Terms and Conditions for particular
                  Fee-Based Services, the following terms and conditions shall
                  apply to all Fee-Based Services: -You may only use the
                  Fee-Based Services if you are 18 years of age or older. You
                  shall pay in full the prices and fees, including, without
                  limitation, all applicable taxes (as more fully described
                  below) for any purchases you, or anyone using the User Account
                  registered to you, make via an Authorized Payment Method (as
                  defined below). -All transactions for Fee-Based Services are
                  non-refundable. However, Linx League reserves the right to
                  cancel any transaction in its sole discretion, in which case
                  you will be given a full refund. 13.3 Payment Method and
                  Terms. For all purchases, you will be charged at confirmation
                  of purchase. In addition, for auto-renewing subscriptions, you
                  will be charged within 24 hours prior to the end of the
                  current period. The Services accept certain methods of payment
                  which will be indicated at the time of purchase as forms of
                  payment (each, an “Authorized Payment Method”), subject to
                  certain restrictions, including, without limitation, territory
                  restrictions, bank/payment card restrictions, spending limits,
                  third party service provider restrictions or otherwise, which
                  may prevent the processing of your order. If a transaction has
                  been declined online due to payment card issues, please ensure
                  all data is correct and resubmit. If the transaction is not
                  accepted online, you will be unable to use that card for your
                  transaction and should use another Authorized Payment Method.
                  If a payment card company is being used for a transaction,
                  Linx may obtain a pre­-approval from the applicable payment
                  card company for an amount up to the amount of the order. All
                  purchases are final once you click the “Submit” or similar
                  button/link and billing to your payment card occurs at such
                  time or shortly thereafter. If payment is not received by us
                  from your credit, debit or charge card issuer or its agents or
                  other payment service provider, you agree to promptly pay all
                  amounts due upon demand by us. Linx League reserves the right
                  to change any and all prices for any Services and other
                  Content at any time, for any reason. 13.4 Auto Renewal. Your
                  subscription will continue indefinitely until terminated in
                  accordance with this Agreement. After your Initial Term, and
                  again after any subsequent subscription period, your
                  subscription will automatically commence on the first day
                  following the end of such period (each a “Renewal Commencement
                  Date”) and continue for an additional equivalent period, at
                  Linx’ then-current price for such subscription. You agree that
                  your User Account will be subject to this automatic renewal
                  feature unless you cancel your subscription prior to the
                  Renewal Commencement Date. If you cancel your subscription,
                  you may use your subscription until the end of your
                  then-current subscription term, but you will not be eligible
                  for a prorated refund of any portion of the subscription fee
                  paid for the then-current subscription period. By subscribing,
                  you authorize Linx League, including any payment processors,
                  to charge you for the initial, and any renewal subscriptions.
                  If Linx League does not receive payment from you or from a
                  payment processor, (i) you agree to pay all amounts due on
                  your User Account upon demand, and/or (ii) you agree that Linx
                  League may either terminate or suspend your subscription and
                  continue to attempt to charge you or a payment processor on
                  your behalf until payment is received (upon receipt of
                  payment, your User Account will be activated and for purposes
                  of automatic renewal, your new subscription commitment period
                  will begin as of the day payment was received). 13.5 Taxes.
                  You are responsible for any taxes imposed on any subscription
                  or Fee-Based transactions conducted on or in connection with
                  the Services and applicable taxes will be added to the amount
                  charged for the applicable transaction. Subscription and
                  Fee-Based transactions in connection with the Services may
                  include, without limitation, sales tax, use tax and any other
                  applicable taxes, which may be based on various factors,
                  including, without limitation, the billing address and tax
                  rates in effect at the time your transaction is completed. No
                  customers or users are eligible for tax exemptions for
                  transactions made in connection with the Services. 13.6
                  Additional Terms and Conditions. Linx League may revise any or
                  all of the fees and prices associated with the Services at any
                  time for any or no reason. Further, Linx League does not
                  guarantee that product descriptions or other content and
                  products will be available, accurate, complete, reliable,
                  current or error­-free. Descriptions and images of, and
                  references to, products or services on or in connection with
                  the subscription and Fee-Based Services do not imply Linx
                  Leagues’ or any of its affiliates’ endorsement of such
                  products or services. Moreover, Linx and its third-party
                  operational service providers reserve the right, with or
                  without prior notice, for any or no reason, to change product
                  descriptions, images, and references; to limit the available
                  quantity of any product; to honor, or impose conditions on the
                  honoring of, any coupon, coupon code, promotional code or
                  other similar promotions; to bar any user from conducting any
                  or all transaction(s); and/or to refuse to provide any user
                  with any product. Further, if Linx terminates your use of or
                  registration to the Services because you have breached this
                  Agreement, you shall not be entitled to a refund of any unused
                  portion of any fees, payments or other consideration. 13.7
                  Virtual Currency. You may accrue virtual currency to your User
                  Account through the Services. We determine and control the
                  availability and nature of virtual currency in our sole
                  discretion. You agree that we may terminate, modify, revalue,
                  or make virtual currency more or less available without any
                  notice or liability to you. Our virtual currency has no
                  monetary value and no value outside the Services. Virtual
                  currency may only be redeemed in the Services for limited
                  purposes, including but not limited to certain promotions.
                  Virtual currency may not be sold or exchanged for real money
                  or for value outside of the Services. We provide virtual
                  currency to you under a limited, personal, revocable,
                  non-exclusive, non-transferable, non-sublicensable, and
                  worldwide license to redeem virtual currency within the
                  Services. Accordingly, except as set forth in the prior
                  sentence, we own and retain all rights, title, and interest in
                  and to the virtual currency in the Services. Virtual currency
                  may not be sold, assigned, or transferred to any third-party
                  under any circumstances unless we approve such transfer in
                  writing. We will not be liable to you or required to provide
                  refunds, benefits, or other compensation in connection with
                  unredeemed virtual currency. If your Account is terminated for
                  any reason, you may lose all virtual currency associated with
                  your User Account. **** 13.8 Third Party Payment Processors.
                  We use Stripe, Inc. to process payments. Stripe, Inc. may
                  receive personal information from you. You are bound by the
                  Stripe Connected Account Agreement, which can be found here:
                  https://stripe.com/us/connect-account/legal **** 13.9
                  Disputes. If you have a complaint or dispute about a certain
                  charge, or about a certain feature or product made available
                  on or in connection with the subscription and Fee-Based
                  Services, you must promptly notify Linx League customer
                  service of such complaint or dispute by sending a detailed
                  email to support@linxleague.com. 14. Customer Support For
                  assistance, questions or complaints please contact:
                  support@linxleague.com 15. Indemnity You agree to defend,
                  indemnify and hold Linx League and its affiliates, and their
                  respective successors and assigns, directors, officers,
                  employees, representatives, agents, licensors, suppliers and
                  service providers (the “Linx League Parties”) harmless from
                  any and all claims, liabilities, damages, losses, costs and
                  expenses (including reasonable attorneys’ fees) (collectively,
                  “Claims”), arising in any way out of or in connection with (a)
                  your use of the Services, (b) your breach or violation of this
                  Agreement, or (c) your User Postings. Linx reserves the right
                  to assume the exclusive defense and control of any matter
                  otherwise subject to indemnification by you, and in such case,
                  you agree to cooperate with Linx’s defense of such Claim. This
                  provision does not require you to indemnify the Linx League
                  Parties for any unconscionable commercial practice by Linx
                  League or for Linx’s fraud, deception, false promise,
                  misrepresentation or concealment, suppression or omission of
                  any material fact in connection with the Site, App, or any
                  Services provided hereunder. 16 Disclaimer 16.1 Generally. THE
                  SERVICES, AND ALL CONTENT, PRODUCTS, SERVICES AND USER
                  POSTINGS MADE AVAILABLE ON, THROUGH OR IN CONNECTION
                  THEREWITH, ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE”
                  BASIS, WITHOUT ANY REPRESENTATION, WARRANTY OR CONDITION OF
                  ANY KIND, EXPRESS OR IMPLIED, OR ANY GUARANTY OR ASSURANCE THE
                  SERVICES WILL BE AVAILABLE FOR USE, OR THAT ANY PRODUCTS,
                  FEATURES, FUNCTIONS, SERVICES OR OPERATIONS WILL BE AVAILABLE
                  OR PERFORM AS DESCRIBED. ALL IMPLIED REPRESENTATIONS,
                  WARRANTIES AND CONDITIONS RELATING TO THE SERVICES AND THIS
                  SITE, AND ALL CONTENT, PRODUCTS, SERVICES AND USER POSTINGS
                  ARE HEREBY DISCLAIMED. Without limiting the foregoing, we are
                  not responsible or liable for any malicious code, delays,
                  inaccuracies, errors, or omissions arising out of your use of
                  the Services. You understand, acknowledge and agree that you
                  are assuming the entire risk as to the quality, accuracy,
                  performance, timeliness, adequacy, completeness, correctness,
                  authenticity, security and validity of any and all features
                  and functions of the Services, including, without limitation,
                  User Postings and Content associated with your use of the
                  Services. 16.2 Third Party Products and Services. WE ARE NOT
                  RESPONSIBLE AND HAVE NO LIABILITY WHATSOEVER FOR GOODS OR
                  SERVICES YOU OBTAIN THROUGH THIRD PARTY SERVICE PROVIDERS OR
                  OTHER WEB SITES, WEB PAGES, APPLICATIONS AND PLATFORMS (EVEN
                  IF ACCESSED OR PURCHASED WITHIN, THROUGH OR IN CONNECTION WITH
                  THE SERVICES), AND ANY SUCH PURCHASES ARE SUBJECT TO THEIR
                  RESPECTIVE TERMS AND CONDITIONS OF USE. YOU ACKNOWLEDGE AND
                  AGREE THAT PRODUCT/SERVICE SPECIFICATIONS AND OTHER
                  INFORMATION HAVE EITHER BEEN PROVIDED BY THE APPLICABLE
                  THIRD-PARTY VENDORS OR COLLECTED FROM PUBLICLY AVAILABLE
                  SOURCES AND WE DO NOT MAKE ANY REPRESENTATIONS OR WARRANTIES
                  AS TO THE ACCURACY OR RELIABILITY OF ANY SUCH INFORMATION.
                  ACCORDINGLY, WE ENCOURAGE YOU TO MAKE WHATEVER INVESTIGATION
                  YOU FEEL NECESSARY OR APPROPRIATE BEFORE PROCEEDING WITH ANY
                  TRANSACTION WITH ANY OF THESE THIRD PARTIES AS SAME IS
                  CONDUCTED AT YOUR SOLE RISK. FURTHER, WE DO NOT MAKE ANY
                  REPRESENTATIONS OR WARRANTIES AS TO THE SECURITY OF ANY
                  INFORMATION (INCLUDING, WITHOUT LIMITATION, CREDIT CARD AND
                  OTHER PERSONAL INFORMATION) YOU MIGHT BE REQUESTED TO GIVE ANY
                  SUCH THIRD-PARTY, AND YOU IRREVOCABLY WAIVE ANY CLAIM AGAINST
                  US OR OUR AFFILIATES WITH RESPECT TO ANY SUCH TRANSACTION. WE
                  ARE NOT RESPONSIBLE FOR ASSISTING YOU IN CORRECTING ANY
                  PROBLEM YOU MAY EXPERIENCE WITH GOODS AND SERVICES PURCHASED
                  THROUGH A THIRD-PARTY SERVICE PROVIDER, EVEN IF THE GOODS OR
                  SERVICES ARE ACCESSED WITHIN, THROUGH OR IN CONNECTION WITH
                  THE SERVICES. WE CANNOT ENSURE THAT YOU WILL BE SATISFIED WITH
                  ANY PRODUCTS OR SERVICES THAT YOU PURCHASE FROM ANY
                  THIRD-PARTY OPERATIONAL SERVICE PROVIDER AS THOSE ARE OWNED
                  AND OPERATED BY INDEPENDENT ENTITIES. IN SOME CASES, YOU MAY
                  BE REQUIRED TO DIRECT CUSTOMER SERVICE ISSUES RELATED TO GOODS
                  OR SERVICES TO THE RELEVANT THIRD-PARTY OPERATIONAL SERVICE
                  PROVIDER. 16.3 No Warranty of Timeliness or Availability. You
                  further understand and acknowledge the capacity of the
                  Services, in the aggregate and for each user, is limited.
                  Consequently, some messages and transmissions, including,
                  without limitation, User Postings, may not be processed in a
                  timely fashion or at all, and some features or functions may
                  be restricted or delayed or become completely inoperable. As a
                  result, you acknowledge and agree that Linx League assumes no
                  liability, responsibility or obligation to transmit, process,
                  store, receive or deliver transactions or User Postings or for
                  any failure or delay associated with any User Postings and you
                  are hereby expressly advised not to rely upon the timeliness
                  or performance of the Services for any transactions or User
                  Postings. Some jurisdictions do not allow for the exclusion of
                  certain warranties or certain limitations on damages and
                  remedies, accordingly some of the exclusions and limitations
                  described in this Agreement may not apply to you. 16.4
                  Limitation of Liability YOU UNDERSTAND AND AGREE THAT, TO THE
                  FULLEST EXTENT PERMISSIBLE BY LAW, LINX LEAGUE, ITS
                  AFFILIATES, SUCCESSORS AND ASSIGNS, OFFICERS, DIRECTORS,
                  EMPLOYEES, AGENTS, REPRESENTATIVES, LICENSORS, OPERATORS,
                  SERVICE PROVIDERS, ADVERTISERS AND SUPPLIERS, SHALL NOT BE
                  LIABLE FOR ANY CONSEQUENTIAL, INCIDENTAL, INDIRECT, SPECIAL OR
                  PUNITIVE DAMAGES. IN NO EVENT SHALL LINX’S LIABILITY TO YOU IN
                  CONNECTION WITH THIS AGREEMENT EXCEED THE GREATER OF: (A) THE
                  AMOUNTS PAID BY YOU DURING THE THREE (3) MONTH PERIOD
                  IMMEDIATELY PRECEDING THE EVENT(S) GIVING RISE TO LIABILITY
                  HEREUNDER; OR (B) $1,000 USD. 17. Dispute Resolution Please
                  read the following arbitration agreement in this Section
                  (“Dispute Resolution”) carefully. It requires you to arbitrate
                  disputes with Linx League and limits the manner in which you
                  can seek relief from us. 17.1 Applicability of Arbitration
                  Agreement. You agree that any dispute or claim relating in any
                  way to your access or use of the Site, to any products sold or
                  distributed through the Site, the Application, Services, or to
                  any aspect of your relationship with Linx League, will be
                  resolved by binding arbitration, rather than in court, except
                  that (1) you may assert claims in small claims court if your
                  claims qualify; and (2) you or Linx League may seek equitable
                  relief in court for infringement or other misuse of
                  intellectual property rights (such as trademarks, trade dress,
                  domain names, trade secrets, copyrights, and patents). This
                  Arbitration Agreement shall apply, without limitation, to all
                  claims that arose or were asserted before the Effective Date
                  of this Agreement or any prior version of this Agreement. 17.2
                  Arbitration Rules and Forum. The Federal Arbitration Act
                  governs the interpretation and enforcement of this Arbitration
                  Agreement. To begin an arbitration proceeding, you must send a
                  letter requesting arbitration and describing your claim to
                  Linx League, LLC 609 Knighthood Court St Augustine, FL 32092.
                  17.3 Authority of Arbitrator. The arbitrator shall have
                  exclusive authority to (a) determine the scope and
                  enforceability of this Arbitration Agreement and (b) resolve
                  any dispute related to the interpretation, applicability,
                  enforceability or formation of this Arbitration Agreement
                  including, but not limited to any claim that all or any part
                  of this Arbitration Agreement is void or voidable. The
                  arbitration will decide the rights and liabilities, if any, of
                  you and Linx. The arbitration proceeding will not be
                  consolidated with any other matters or joined with any other
                  cases or parties. The arbitrator shall have the authority to
                  grant motions dispositive of all or part of any claim. The
                  arbitrator shall have the authority to award monetary damages
                  and to grant any non-monetary remedy or relief available to an
                  individual under applicable law, the arbitral forum’s rules,
                  and this Agreement. The arbitrator shall issue a written award
                  and statement of decision describing the essential findings
                  and conclusions on which the award is based, including the
                  calculation of any damages awarded. The arbitrator has the
                  same authority to award relief on an individual basis that a
                  judge in a court of law would have. The award of the
                  arbitrator is final and binding upon you and us. 17.4 Waiver
                  of Jury Trial. YOU AND LINX LEAGUE HEREBY WAIVE ANY
                  CONSTITUTIONAL AND STATUTORY RIGHTS TO SUE IN COURT AND HAVE A
                  TRIAL IN FRONT OF A JUDGE OR A JURY. You and Linx League are
                  instead electing that all claims and disputes shall be
                  resolved by arbitration under this Arbitration Agreement,
                  except as specified in Section 17.1 above. An arbitrator can
                  award on an individual basis the same damages and relief as a
                  court and must follow this Agreement as a court would.
                  However, there is no judge or jury in arbitration, and court
                  review of an arbitration award is subject to very limited
                  review. 17.5 Waiver of Class or Other Non-Individualized
                  Relief. ALL CLAIMS AND DISPUTES WITHIN THE SCOPE OF THIS
                  ARBITRATION AGREEMENT MUST BE ARBITRATED ON AN INDIVIDUAL
                  BASIS AND NOT ON A CLASS OR COLLECTIVE BASIS, ONLY INDIVIDUAL
                  RELIEF IS AVAILABLE, AND CLAIMS OF MORE THAN ONE CUSTOMER OR
                  USER CANNOT BE ARBITRATED OR CONSOLIDATED WITH THOSE OF ANY
                  OTHER CUSTOMER OR USER. If a decision is issued stating that
                  applicable law precludes enforcement of any of this
                  subsection’s limitations as to a given claim for relief, then
                  the claim must be severed from the arbitration and brought
                  into the State or Federal Courts. All other claims shall be
                  arbitrated. 17.6 Severability. Except as provided in
                  subsection 17.5, if any part or parts of this Arbitration
                  Agreement are found under the law to be invalid or
                  unenforceable, then such specific part or parts shall be of no
                  force and effect and shall be severed and the remainder of the
                  Arbitration Agreement shall continue in full force and effect.
                  17.7 Survival of Agreement. This Arbitration Agreement will
                  survive the termination of your relationship with Linx League.
                  18. Miscellaneous 18.1. Final Agreement; Severability;
                  Survival; Waiver. This Agreement and any applicable Additional
                  Terms contain the entire understanding and agreement between
                  you and Linx League concerning the Services and supersede any
                  and all prior or inconsistent understandings relating to the
                  Services and your use thereof. If any provision of this
                  Agreement is held to be illegal, invalid or unenforceable,
                  this shall not affect any other provisions and this Agreement
                  shall be deemed amended to the extent necessary to make it
                  legal, valid and enforceable. Any provision which must survive
                  in order to allow us to enforce its meaning shall survive the
                  termination of this Agreement; however, no action arising out
                  of this Agreement or your use of the Services, regardless of
                  form or the basis of the claim, may be brought by you more
                  than one year after the cause of action has arisen (or if
                  multiple causes, from the date the first such cause arose).
                  The failure of Linx League to exercise or enforce any right or
                  provision of this Agreement will not operate as a waiver of
                  such right or provision. 18.2 Governing Law and Venue. This
                  Agreement and your use of the Services is governed by,
                  construed and enforced in accordance with the internal
                  substantive laws of the State of Delaware (notwithstanding the
                  State’s conflict of laws provisions) applicable to contracts
                  made, executed and wholly performed in Delaware, and, for the
                  purposes of any and all legal or equitable actions, you
                  specifically agree and submit to the exclusive jurisdiction
                  and venue of the State and Federal Courts situated in Delaware
                  for any claims that cannot be resolved in accordance with
                  Section 17 and agree you shall not object to such jurisdiction
                  or venue on the grounds of lack of personal jurisdiction,
                  forum non convenience or otherwise. IN ANY ACTION OR
                  PROCEEDING COMMENCED TO ENFORCE ANY RIGHT OR OBLIGATION OF THE
                  PARTIES UNDER THIS AGREEMENT, YOUR USE OF THE SERVICES OR WITH
                  RESPECT TO THE SUBJECT MATTER HEREOF, YOU HEREBY WAIVE ANY
                  RIGHT YOU MAY NOW HAVE OR HEREAFTER POSSESS TO A TRIAL BY
                  JURY. 18.3 Notice. Where Linx League requires that you provide
                  an email address, you are responsible for providing Linx
                  League with your most current email address. In the event that
                  the last email address you provided to Linx League is not
                  valid, or for any reason is not capable of delivering to you
                  any notices required/ permitted by the Terms, Company’s
                  dispatch of the e-mail containing such notice will nonetheless
                  constitute effective notice. You may give notice to Linx at
                  the following address: ***609 Knighthood Court St Augustine,
                  FL 32092. Such notice shall be deemed given when received by
                  Linx League by letter delivered by nationally recognized
                  overnight delivery service or first class postage prepaid mail
                  at the above address. 18.4 Assignment. This Agreement, and any
                  rights, licenses and privileges granted herein, may not be
                  transferred or assigned by you, but may be assigned or
                  transferred by Linx League without restriction, notice or
                  other obligation to you. 18.5 App Stores. You acknowledge and
                  agree that the availability of the App and the Services is
                  dependent on the third party from whom you received the
                  Application license, e.g., the Apple App Store or Google Play
                  (“App Store”). You acknowledge that this Agreement is between
                  you and Linx League and not with the App Store. Linx, not the
                  App Store, is solely responsible for the App, the content
                  thereof, maintenance, support services, and warranty therefor,
                  and addressing any claims relating thereto (e.g., product
                  liability, legal compliance or intellectual property
                  infringement). In order to use the App, you must have access
                  to a wireless network, and you agree to pay all fees
                  associated with such access. You also agree to pay all fees
                  (if any) charged by the App Store in connection with the App.
                  You agree to comply with, and your license to use the App is
                  conditioned upon your compliance with, all applicable
                  third-party terms of agreement (e.g., the App Store’s terms
                  and policies) when using the App. You acknowledge that the App
                  Store (and its subsidiaries) are third-party beneficiaries of
                  this Agreement and will have the right to enforce it.
                </Text>
              </Box>
            </Box>
          </Center>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default RulesAndScroing
