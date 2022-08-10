import {Modal} from 'antd';

const InfoModal = ({showModal, setShowModal}) => {
    return (
        <Modal 
            visible={showModal} 
            onCancel={() => setShowModal(!showModal)} 
        >
            <p>Parc-Le-Breos is a beautifully appointed Country House, a stunning Gower Bed and Breakfast. The guest house and restaurant is set in the grounds of a Norman deer park in the heart of the Gower peninsula, only 20 minutes’ walk from Three Cliffs Bay. Tastefully furnished throughout, you will find fresh flowers, pitch pine floors, crackling log fires and a distinctly laid-back style - Perfect for couples and families alike.
                <br /><br/>
                Our restaurant offers lovingly prepared, fresh and seasonal, home-made dishes in a relaxed and friendly atmosphere. On some dates of the year the house and grounds are available to be rented exclusively for special occasions, weddings, reunions and birthday parties. Please contact us so we can tailor make your special event for you.
                <br /><br />
                As a relaxed and informal family run bed and breakfast, we aim to provide you with a real home from home for the duration of your stay in Gower. A full Welsh breakfast (or something lighter if you prefer) is included in all the prices you will see on the website.
                <br /><br />
                We invite our guests and non-residents alike to enjoy our secluded Gower restaurant. Savour delicious meals prepared with the freshest high quality local produce. Many of the herbs, salad leaves, fruit and vegetables are grown in our Kitchen Garden. Why not enjoy a sumptuous Afternoon tea in the comfort of the conservatory or on the terrace overlooking our extensive gardens? With decadent freshly made cakes, sweet treats, finger sandwiches and conserves We happily cater for all dietary requirements, there are always vegetarian options on the menu and many of the dishes can be prepared as vegan or gluten free.
                <br /><br />
                The gardens are extensive and well kept with a sun terrace in front of the house which overlooks the lawns, farmland and woodland beyond. We are in a perfect location for those planning a walking holiday and many of the walking routes that allow you to explore the Gower peninsula on foot begin right at our doorstep. All the routes are available to downloaded free from our Walks in Gower page.
                <br /><br />
                We are happy to help you plan your holiday on the Gower peninsula and are able to cater for a wide variety of needs. If you would like any further information, or some help with planning your stay, don’t hesitate to contact us. Everyone is welcome at our home, and we will do our utmost to ensure that we provide you with a great stay at this wonderful Gower bed and breakfast.
                <br /><br />
                If you are searching for a venue to host your special event, celebration or wedding in Gower, look no further, we will happily tailor the venu to your needs and look after the organisation leaving you to relax and enjoy a stress free day.
            </p>
        </Modal>
    )
}

export default InfoModal;