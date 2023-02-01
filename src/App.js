import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import alexaImage from './images/alexa.png';
import cortanaImage from './images/cortana.png';
import siriImage from './images/siri.png';

function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">
                        Personal Digital Assistance
                    </p>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard 
                                title="Alexa" 
                                handle="@alexa99" 
                                image={alexaImage} 
                                altImage="Logo image of Alexa"
                                description="Alexa was created by Amazon and helps you buy things." 
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                                title="Cortana" 
                                handle="@cortana32" 
                                image={cortanaImage} 
                                altImage="Logo image of Cortana"
                                description="Cortana was made by Microsoft. Who knows what id does?"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                                title="Siri" 
                                handle="@siri01" 
                                image={siriImage} 
                                altImage="Logo image of Siri"
                                description="Siri was made by Apple and is being phased out."
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
