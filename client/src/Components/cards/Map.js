const Map = () => {
    return (
        <>
            <div className="container">
                <div className="row">
					<div className="col-12 col-md-6 order-md-2" data-aos="zoom-in">
						<h1>Contact & Location</h1>
						<p>
                            <address>
                                <b>For any enquiries please call us on 
                                    <a href="tel:01792 371636">
                                        {" "}01792 371636
                                    </a>.</b><br />
                                Alternatively you can email us at 
                                    <a href="mailto:info@parclebreos.co.uk">
                                        {" "}info@parclebreos.co.uk
                                    </a>.<br /><br />
                                Our address is:<br />
                                Parc-Le-Breos House<br />
                                Parkmill<br />
                                Gower<br />
                                SA3 2HA
                            </address>
                        </p>
					</div>
					<div className="col-12 col-md-6" data-aos="fade-up">
						<img src="https://parc-le-breos.co.uk/wp-content/uploads/2016/11/diversion-map1.jpg" alt="Parc le Breos Map" />
					</div>
				</div>
            </div>
        </>
    )
}

export default Map;