// const title = props.title;
// const handle = props.handle;

// Do the same as above - JS Destructuring
// const {title, handle} = props;

function ProfileCard({title, handle, image, altImage, description}) { //{title, handle} - same as JS Destructuring

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt={altImage}/>
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
                <div className="content">
                    {description}
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;