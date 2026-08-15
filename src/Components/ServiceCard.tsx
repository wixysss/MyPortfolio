import '../Styles/ServiceCard.css';
import type {Service} from "../Data/Services.ts";

const ServiceCard = ({service}: { service: Service }) => {
    return (
        <a href={service.link} target='_blank' className='service-card-a' rel='noopener noreferrer'>
            <div className='service-card'>

                <div className='service-card-img'>
                    <img src={service.img} alt={service.title}/>
                </div>

                <div className='service-card-info'>
                    <h1>{service.title}</h1>
                    <p>{service.description}</p>
                </div>
            </div>
        </a>
    );
};

export default ServiceCard;
