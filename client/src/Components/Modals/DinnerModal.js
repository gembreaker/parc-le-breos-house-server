import {Modal} from 'antd';

const LunchModal = ({showDModal, setShowDModal}) => {
    return (
        <Modal 
            visible={showDModal} 
            onCancel={() => setShowDModal(!showDModal)} 
        >
            <h1>Evening Dining at Parc-Le-Breos</h1>
            <h3>Book a table between 6pm & 8pm each evening, except for Tuesdays.</h3>
            <p>Enjoy a beautifully prepared meal with family or friends in the relaxed and friendly setting of Parc-Le-Breos. Savour the atmosphere of our welcoming lounge with its pitch pine floors and roaring log fire, or enjoy the wonderfully light and airy conservatory with views over the surrounding gardens. Our new dining room offers a contemporary yet stylish area to enjoy your meal, with views over our lawns and extensive gardens.
                <br />
                You can reserve a table for dinner between 6pm & 8:30pm, and we are open each evening except for Tuesdays. Booking is essential, so please call us on 01792 371636.
                <br />
                Each evening we offer an a la carte menu with a great range of dishes. From simple salads through to hearty winter warmers, there is something to suit every taste and appetite at Parc-Le-Breos. As always, we take great care to ensure we source the best seasonal local produce whenever possible. We also have a great <a href="https://parc-le-breos.co.uk/wp-content/uploads/2020/11/wine-list-nov-20.pdf" target="_blank" rel="noreferrer">wine list</a> and a hand-picked selection of local ales and ciders. Why not take a look at our <a href="https://parc-le-breos.co.uk/wp-content/uploads/2020/11/November-Dinner-Menu-20.pdf" target="_blank" rel="noreferrer">Sample Menu</a>.
                <br />
                We happily cater for all dietary requirements and there are always vegetarian dishes on the menu - If you would like us to prepare a vegan or gluten-free meal, just let us know at the time of booking and we will make sure we cook something tasty for you.
                <br />
                We are always delighted to cater for larger group bookings and are happy to tailor special menus to your wishes, so feel free to check out our events page and then call us for further details.
            </p>
        </Modal>
    )
}

export default LunchModal;