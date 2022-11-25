import Parrafo from "../Parrafo";
import IconoParrafo from "../IconoParrafo";
import IconoParrafo2 from "../IconoParrafo2";

const Footer =()=>{
return(
<section>
<footer className="footer">
<form className="form_footer" action="">  
<section className="footer_section">
<input type="button" className="button" value="Instagram"/>
<img className="img bg-white" src="./public/instagram.svg" alt="" />
</section>

<section className="footer_section">
<input type="button" className="button" value="Facebook"/>
<img className="img bg-white" src="./facebook.svg" alt="" />
</section>

<section className="footer_section">
<input type="button" className="button" value="What'sApp"/>
<img className="img bg-white" src="./public/whatsapp.svg" alt="" />
</section>
</form>
</footer>
<section>

</section>
<Parrafo/>
<IconoParrafo/>
<IconoParrafo2/>
</section>

);
};
export default Footer