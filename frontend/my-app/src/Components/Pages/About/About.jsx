import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ShopPhoto from "../../../assets/2021-06-12.webp"
import logo  from "../../../assets/Screenshot 2025-10-06 210104.png"
import bgImg  from "../../../assets/lightimg.jpg"

function About() {
return (
<Container className="mb-5" style={{backgroundImage: `url(${bgImg})` , backgroundSize: 'cover',
backgroundPosition: 'center',
backgroundRepeat: 'no-repeat',
}} >
<Row className="text-center mb-4">
<Col>
<img src={logo} alt="#logo" width={"auto"} height={"200px"} />
<h2 style={{textDecoration:"red underline", marginTop:"30px",color:"seagreen"}}>हमारे बारे में - कृषि विकास केंद्र</h2>

<p className="text-muted">हर वक्त किसानों के साथ — हर फसल के लिए भरोसेमंद समाधान</p>
</Col>
</Row>

<Row className="align-items-center mb-5">
<Col md={6}>
<Image
src={ShopPhoto}
alt="हम कौन हैं"
fluid
rounded
/>
</Col>
<Col md={6}>
<h4 style={{textDecoration:"green underline",color:"slateblue"}}>हम कौन हैं</h4>
<p>
कृषि विकास केंद्र एक विश्वसनीय दुकान है जो किसानों को उन्नत खेती के लिए जरूरी उत्पाद उपलब्ध कराती है।
हमारे पास उच्च गुणवत्ता वाले खाद, कीटनाशक, और फसल सुरक्षा की दवाइयाँ उपलब्ध हैं। हम किसानों की पैदावार
बढ़ाने और फसल को सुरक्षित रखने में मदद करते हैं।
</p>
</Col>
</Row>

<Row className="align-items-center mb-5">
<Col md={6}>
<h4 style={{textDecoration:"yellow underline",color:"green"}}>हम क्या प्रदान करते हैं</h4>
<p>
हमारे पास जैविक और रासायनिक खाद, कीट नियंत्रण समाधान, और विशेषज्ञ सलाह उपलब्ध है। चाहे आपकी खेती छोटी हो या
बड़ी, हम आपकी ज़रूरत के अनुसार सही उत्पाद चुनने में मदद करते हैं।
</p>
</Col>
<Col md={6}>
<Image
src="https://5.imimg.com/data5/SELLER/Default/2021/8/WU/VK/VM/107166607/agro-chemicals-500x500.PNG"
alt="हम क्या करते हैं"
fluid
rounded
/>
</Col>
</Row>

<Row className="mb-5">
<Col>
<h4 style={{textDecoration:"blue underline",color:"red"}}>हमारा उद्देश्य</h4>
<p>
किसानों को असली उत्पाद, विशेषज्ञ सलाह और भरोसेमंद सेवा देना। हम मानते हैं कि खेती हमारे देश की रीढ़ है—
और हम इसे मजबूत बनाने के लिए प्रतिबद्ध हैं।
</p>
</Col>
</Row>

<Row className="mb-5">
<Col>
<h4 style={{textDecoration:"orange underline",color:"purple"}}>हमारे लक्ष्य</h4>
<ul>
<li>प्रमाणित और प्रभावी कृषि उत्पाद उपलब्ध कराना</li>
<li>समय पर डिलीवरी और उचित मूल्य देना</li>
<li>किसानों को सुरक्षित उपयोग और फसल देखभाल की जानकारी देना</li>
<li>जैविक और टिकाऊ खेती को बढ़ावा देना</li>
<li>हर ग्राहक के साथ लंबे समय का भरोसा बनाना</li>
</ul>
</Col>
<Col md={6}>
<Image
src="https://krishibazaar.in/public/blogs/fc3ZRektsGWhUD6OjQnAIZJGW557zGyJs4uorUOd.jpg"
alt="हमारे लक्ष्य"
fluid
rounded
/>
</Col>
</Row>

<Row className="mb-5">
<Col>
<h4 style={{textDecoration:"brown underline",color:"blue"}}>हम कैसे काम करते हैं</h4>
<p>
हम सीधे विश्वसनीय निर्माताओं और सरकारी मान्यता प्राप्त सप्लायर्स से उत्पाद लेते हैं। हर उत्पाद की गुणवत्ता
और सुरक्षा की जांच की जाती है। हमारी टीम किसानों को उनकी ज़मीन और फसल के अनुसार सही समाधान चुनने में मदद करती है।
</p>
</Col>
</Row>

<Row className="mb-5">
<Col>
<h4 style={{textDecoration:"yellow underline",color:"brown"}}>हमें क्यों चुनें</h4>
<ul>
<li>असली और असरदार उत्पाद</li>
<li>हिंदी और अंग्रेजी में विशेषज्ञ सहायता</li>
<li>शहरी और ग्रामीण इलाकों में तेज डिलीवरी</li>
<li>सस्ती कीमतें और मौसमी ऑफर</li>
<li>हज़ारों किसानों का भरोसा</li>
</ul>
</Col>
<Col md={6}>
<Image
src="https://img.freepik.com/premium-photo/young-indian-farmer-showing-smartphone-money-cotton-field_75648-2073.jpg"
alt="हमें क्यों चुनें"
fluid
rounded
/>
</Col>
</Row>

<Row className="mb-5">
<Col>
<h4 style={{textDecoration:"gray underline",color:"skyblue"}}>हमारे मूल्य</h4>
<p>
ईमानदारी, विश्वसनीयता और किसान-प्रथम सोच। हम सिर्फ उत्पाद नहीं बेचते—हम आजीविका का समर्थन करते हैं।
हर खेत हमारे लिए मायने रखता है।
</p>
</Col>
</Row>

<Row>
<Col>
<h4 style={{textDecoration:"red underline",color:"red"}}>संपर्क करें</h4>
<p>ईमेल: <a href="mailto:ekansh982@gmail.com">ekansh982@gmail.com</a></p>
<p>फोन: +91 6395208277, +91 7830301838</p>
</Col>
</Row>
</Container>
);
}

export default About;
