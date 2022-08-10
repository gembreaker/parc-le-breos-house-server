import {Modal} from 'antd';

const AfternoonTeaModal = ({showATModal, setShowATModal}) => {
    return (
        <Modal 
            visible={showATModal} 
            onCancel={() => setShowATModal(!showATModal)} 
        >
            <h1>Afternoon Tea in Gower at Parc-Le-Breos – £17.50 per person</h1>
            <p>Enjoy a sumptuous Gower Afternoon Tea at Parc-Le-Breos. Sit back and relax with a delight that can be enjoyed by couples, families, and larger groups alike. In the warmer months you can sit on our terrace overlooking the beautiful gardens, while in the cooler months you can enjoy the period dining room with roaring log fire or the wonderfully light and airy conservatory with views over the surrounding landscaped grounds. At all times of the year, Parc-Le-Breos is a perfect place to while away the afternoon.
                <br />
                We serve afternoon tea all year around (Wednesdays through to Saturdays from 3pm) but booking is essential, so please call us on 01792 371636 to make a reservation.
                <br />
                Our fair is a wonderful selection of freshly made sandwiches, home-made scones, cakes, sweet and savoury treats - and of course a cup of Welsh Brew tea (or coffee if you prefer!) Why not really indulge yourself and add a chilled glass of Prosecco, or one of our fantastic local ciders or ales to quench your thirst.
                <br />
                We happily cater for all dietary requirements, so just let us know at the time of booking whether you require vegetarian, vegan or gluten-free options, and we will make sure you are well fed.
                <br />
                We are also very happy to cater for larger group bookings and can tailor special menus to your wishes so feel free to call us for further details. Take a look at our events page and find out why Parc Le Breos is perfect for sophisticated hen parties, baby showers, and birthday treats.
            </p>
        </Modal>
    )
}

export default AfternoonTeaModal;