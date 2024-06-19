import Title from './Title';
import {services} from "../data";
import Service from './Service';

function Services() {
    return (
        <section className="section services" id='services'>
            <Title title='our' subTitle='services' />

            <div className='section-center services-center'>
                {services.map((service) =>{
                    // console.log(service)
                    return <Service {...service} key={service.id} />
                })}
            </div>
        </section>
    );
}

export default Services;