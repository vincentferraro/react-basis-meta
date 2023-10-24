import PromoHeading from "./PromoHeading";
const Promo2 = ()=>{
    const data = {
        heading:"99% of all items",
        callToAction:"Everything must go!"
    }
    return(<div>
        <PromoHeading heading={data.heading} callToAction={data.callToAction}/>
    </div>)
}

export default Promo2;