import Title from "./Title";
import { tours } from "../data";
import Tour from "./Tour";

function Tours() {
    return (
        <section className="section" id="tours">
            <Title title="our" subTitle="Tours" />

            <div className='section-center featured-center'>
                {tours.map((tour) => {
                    // console.log(tour)
                    return (
                        <Tour key={tour.id} {...tour} />
                    )
                })}
            </div>
        </section>
    )
}

export default Tours;