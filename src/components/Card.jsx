import Gravatar from 'react-gravatar';
import './styles/Card.scss'

const Card = ({ data }) => {
    return (
            <div class="card">
            <div class="img-content">
                <div class="img-container">
                    <div class="card-img">
                        <Gravatar class="photo1" email={data.email} size={100} />
                    </div>
                </div>
            </div>
            <div class="body1">
                <h2 class="name">{data.name}</h2>
                <p class="email"><b>Email:</b> {data.email}</p>
                <p class="city"><b>City:</b> {data.address.city}</p>
                <p class="company"><b>Company:</b> {data.company.name}</p>
            </div>
        </div>
    );
}

export default Card