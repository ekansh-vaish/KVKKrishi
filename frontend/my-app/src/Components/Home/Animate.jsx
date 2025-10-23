import React from 'react'
import "./Animate.css"
import {  useNavigate} from 'react-router-dom';

function Animate() {
const navigate = useNavigate();
return (
<div>
<div className="slider">
<div className="slide">
<div className="slide-content">
<h2>किसानों को सशक्त बनाना, बेहतर कल के लिए</h2>
<p>
  उच्च गुणवत्ता वाले कीटनाशक, उर्वरक और अन्य उत्पाद पाएं—फसल की पैदावार बढ़ाएं और खेत की सुरक्षा करें।
</p>
<button onClick={() => navigate("/agri")}>अभी देखें</button>
</div>
</div>

<div className="slide">
<div className="slide-content">
<h2>आपका खेती में भरोसेमंद साथी</h2>
<p>
  हर भारतीय किसान की प्रगति यात्रा के लिए विश्वसनीय कृषि समाधान उपलब्ध कराना।
</p>
<button onClick={() => navigate("/agri")}>अभी देखें</button>
</div>
</div>

<div className="slide">
<div className="slide-content">
<h2>आत्मविश्वास के साथ खेती करें</h2>
<p>
  हर मौसम में स्वस्थ फसल और अधिक पैदावार सुनिश्चित करने वाले गुणवत्तापूर्ण उत्पाद।
</p>
<button onClick={() => navigate("/agri")}>अभी देखें</button>
</div>
</div>

<div className="slide">
<div className="slide-content">
<h2>अपने खेतों को बदलें</h2>
<p>
  खरपतवार, कीट और पोषक तत्वों के प्रबंधन के लिए स्मार्ट समाधान।
</p>
<button onClick={() => navigate("/agri")}>अभी देखें</button>
</div>
</div>
</div>
</div>
)
}

export default Animate
