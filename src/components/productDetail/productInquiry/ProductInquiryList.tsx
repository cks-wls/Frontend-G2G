import '@/components/productDetail/productInquiry/ProductInquiryList.scss'
interface ProductInquiryListProps {
  el: number
}
function ProductInquiryList({ el }: ProductInquiryListProps) {
  return (
    <div className="inquiry-top-section-component">
      <div className="long-section-component">{el}</div>
      <div className="short-section-component">{el}</div>
      <div className="short-section-component">{el}</div>
      <div className="short-section-component">{el}</div>
    </div>
  )
}
export default ProductInquiryList
