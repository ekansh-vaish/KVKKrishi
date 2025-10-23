import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from "../../../assets/Copilot_20251008_123616.png";
import Bayer from "../../../assets/TRIMURTI-LOGO-PNG-.png";
import Thakar from "../../../assets/logo.png";
import Saffire from "../../../assets/thakar-logo04.png";
import Crystal from "../../../assets/Saffire logo.png";
import Dehat from "../../../assets/farmer-first.jpg";
import Bansal from "../../../assets/goyal.webp";
import bandar from "../../../assets/bnadar.jpeg";
import seed1 from "../../../assets/shiv-khad-and-beej-bhandar-meerut-w82uqbkiab.avif";
import seed3 from "../../../assets/shop12.avif";
import "./Netwok.css"
function Network() {
  return (
    <Container className="py-4">
      <div className="text-center mb-4">
        <h1>कृषि विकास केंद्र - हमारा नेटवर्क</h1>
        <img src={Image} className="img-fluid mb-3" alt="हमारा नेटवर्क" />
      </div>

      <Row className="text-center mb-5">
        {[
          { count: "30,000+", label: "Farmers Served" },
          { count: "25+", label: "Partner Shops" },
          { count: "15+", label: "Trusted Brands" },
          { count: "50+", label: "Villages Covered" },
          { count: "100%", label: "Authentic Products" },
          { count: "24x7", label: "Farmer Support" },
          { count: "₹5 Cr+", label: "Annual Supply Value" },
        ].map((item, idx) => (
          <Col xs={6} md={4} lg={3} key={idx} className="mb-3">
            <div className="border rounded p-3 shadow-sm h-100">
              <h4 className="text-success">{item.count}</h4>
              <h6>{item.label}</h6>
            </div>
          </Col>
        ))}
      </Row>

      <div className="connection mb-5">
        <h3>उत्पादों की सप्लाई</h3>
        <hr style={{ color: "green" }} />
        <p className="para">
         कृषि विकास केंद्र आज शाहाबाद और आसपास के ग्रामीण क्षेत्रों में एक मजबूत और भरोसेमंद सप्लाई नेटवर्क के रूप में स्थापित हो चुका है, जहाँ हम Bansal Beej Bhandar, Suraj Beej Bhandar, Shiv Shakti Beej Bhandar और Gupta Beej Bhandar जैसी प्रतिष्ठित दुकानों तक प्रमाणित कृषि उत्पाद पहुँचाते हैं। हमारा नेटवर्क Dehat, Thakar Agro और Bayer CropScience जैसी राष्ट्रीय स्तर की कंपनियों से जुड़ा हुआ है, जिससे किसानों को उच्च गुणवत्ता वाले खाद, कीटनाशक, बीज और फसल सुरक्षा समाधान समय पर मिलते हैं। हम न केवल उत्पाद सप्लाई करते हैं, बल्कि किसानों को उनकी ज़मीन, फसल और मौसम के अनुसार सही सलाह भी देते हैं, जिससे उनकी पैदावार बढ़े और खेती सुरक्षित रहे। हमारी टीम हर गाँव में किसानों से संवाद करती है, उनकी ज़रूरतों को समझती है और उन्हें सस्ती कीमतों पर असरदार समाधान उपलब्ध कराती है। हम WhatsApp, कॉल और स्थानीय संपर्क केंद्रों के माध्यम से किसानों तक जानकारी पहुँचाते हैं। हमारा उद्देश्य है कि हर खेत तक ताकत पहुँचे और हर किसान को भरोसेमंद सेवा मिले, जिससे उनकी मेहनत का पूरा फल मिल सके। Krishi Vikas Kendra का यह नेटवर्क आज हजारों किसानों की उम्मीद, विश्वास और तरक्की का केंद्र बन चुका है। हम सिर्फ उत्पाद नहीं बेचते—हम किसानों की आजीविका, आत्मनिर्भरता और भविष्य को मजबूत बनाते हैं। यही कारण है कि हर सीजन में, हर गाँव में, किसान हमें अपनी पहली पसंद मानते हैं।
        </p>

        <Row>
          {[
            { title: "🛒 Goyal Beej Bhandar", desc: "किसानों की पहली पसंद...", img: Bansal },
            { title: "🛒 Mourya Beej Bhandar", desc: "फसल सुरक्षा...", img: bandar },
            { title: "🛒 Shiv Shakti Beej Bhandar", desc: "जैविक और रासायनिक...", img: seed1 },
            { title: "🛒 Gupta Beej Bhandar", desc: "स्थानीय किसानों के लिए...", img: seed3 },
          ].map((shop, idx) => (
            <Col xs={12} md={6} key={idx} className="mb-4 text-center">
              <h4>{shop.title}</h4>
              <p>{shop.desc}</p>
              <img src={shop.img} className="img-fluid rounded" alt={shop.title} />
            </Col>
          ))}
        </Row>
      </div>

      <div className="company mb-5">
        <h4>हम किनसे जुड़े हैं:</h4>
        <p>
          {/* Full paragraph unchanged */}
         कृषि विकास केंद्र , राष्ट्रीय और अंतरराष्ट्रीय स्तर की कंपनियों से सीधे प्रमाणित कृषि उत्पाद प्राप्त करता है, जिससे हमारे नेटवर्क में गुणवत्ता और विश्वसनीयता दोनों सुनिश्चित होती है। ये कंपनियाँ आधुनिक खेती के लिए आवश्यक खाद, कीटनाशक, बीज और फसल सुरक्षा समाधान प्रदान करती हैं, जो किसानों की पैदावार को बढ़ाने और उनकी मेहनत को सुरक्षित रखने में अहम भूमिका निभाते हैं। हम इन ब्रांड्स से केवल उत्पाद नहीं लेते—हम उनके साथ तकनीकी सलाह, उत्पाद प्रशिक्षण और उपयोग की जानकारी भी साझा करते हैं ताकि हर किसान को उसकी ज़मीन और फसल के अनुसार सही समाधान मिल सके। Dehat की ग्रामीण पहुँच, Thakar Agro की जैविक उत्पाद विशेषज्ञता और Bayer की रिसर्च-बेस्ड तकनीक हमारे नेटवर्क को एक नई ऊँचाई देती है। यही वजह है कि Krishi Vikas Kendra आज किसानों की पहली पसंद बन चुका है—जहाँ उन्हें सिर्फ सामान नहीं, बल्कि भरोसा, जानकारी और सहयोग मिलता है।
        </p>
        <Row className="text-center justify-content-center">
          {[Bayer, Saffire, Thakar, Crystal, Dehat].map((logo, idx) => (
            <Col xs={6} md={3} lg={2} key={idx} className="mb-3">
              <img src={logo} className="img-fluid" alt={`brand-${idx}`} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default Network;
