import "@/shared/components/Form/Producer/ProducerNumberFormStyle.scss"

function ProducerNumberForm(){
    return <input className = "producerNumberForm" placeholder = "- 를 제외한 사업자 번호 10자리를 입력해주세요"></input>
    // 이후 API와 연동시켜야함
}

export default ProducerNumberForm