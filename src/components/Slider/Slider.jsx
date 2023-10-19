import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const Slider = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <div className="my-10 max-w-screen-xl mx-auto px-8 md:px-16" >

            <AutoplaySlider play={true}
                cancelOnInteraction={false}
                interval={6000}>

                <div data-src="https://i.ibb.co/kg8wGZ8/14669631-5510144.png" />
                <div data-src="https://i.ibb.co/wJvPqsT/slider2.jpg" />
                <div data-src="https://i.ibb.co/SRWNDYV/screen-post-jv-Kawp-HXGt4-unsplash.jpg" />
            </AutoplaySlider>
        </div>
    );
};

export default Slider;