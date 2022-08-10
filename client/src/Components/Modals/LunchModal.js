import {Modal} from 'antd';

const LunchModal = ({showLModal, setShowLModal}) => {
    return (
        <Modal 
            visible={showLModal} 
            onCancel={() => setShowLModal(!showLModal)} 
        >
            <h1>Lunches at Parc-Le-Breos</h1>
            <h3>Book a table between 12:30pm & 2:30pm Wednesday to Saturday</h3>
            <p>Why not come and enjoy a delicious lunch in the relaxed and friendly setting of Parc-Le-Breos and enjoy its wonderful surroundings. In the summer months you can dine out on the terrace and enjoy the sunshine and views over the gardens. During the cooler months you can either enjoy the warmth of the roaring log fire in the dining room with its period decor, or take advantage of the wonderful natural light afforded by the conservatory.
                <br />
                Reserve a table for lunch between 12:30pm & 2:30pm. Booking is essential, so please call us on 01792 371636.
                <br />
                Our Lunch Menu focuses on lighter dishes to reflect on a more leisurely lunch time. From homemade soups to fillet steak, we’re sure you’ll find something you’ll enjoy. We also have a great wine list and a hand-picked selection of local ales and ciders.
            </p>
        </Modal>
    )
}

export default LunchModal;