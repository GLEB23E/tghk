const modal = () => {
    const modal = document.getElementById('mymodal') 
    const modal2 = document.getElementById('cartModal') 
    const modal3 = document.getElementById('deliveryModal')
    const modal4 = document.getElementById('paymentModal')
    document.getElementById('modal').addEventListener('click', () => {
        modal.style.display = 'block'
    })
    document.getElementById('modal2').addEventListener('click', () => {
        modal2.style.display = 'block'
    })
    document.getElementById('delivery').addEventListener('click', () => {
        modal3.style.display = 'block'
    })
    document.getElementById('payment').addEventListener('click', () => {
        modal4.style.display = 'block'
    })
}
export default modal