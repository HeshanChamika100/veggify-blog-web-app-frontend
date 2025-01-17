import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const SingleProduct = () => {
  const item = useLoaderData();
  const moreInfo = item?.more[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const extractNumber = (timeString) => {
    let timeArray = timeString.split(" ");
    return parseInt(timeArray[0]);
  };

  let prepTimeMinutes = extractNumber(moreInfo?.prep_time);
  let cookTimeMinutes = extractNumber(moreInfo?.cook_time);

  const totalTimeMinutes = prepTimeMinutes + cookTimeMinutes;

  const instructionsArray = item?.instructions.split(".");

  //    const convertTimeToMinutes = (time) => {
  //       const [value, unit] = time.split(' ');
  //       const timeValue = parseInt(value, 10);
  //       if (unit.includes('minute')) {
  //         return timeValue;
  //       } else if (unit.includes('hour')) {
  //         return timeValue * 60;
  //       }
  //       return 0;
  //     };

  //    const totalTime = moreInfo ?
  //     convertTimeToMinutes(moreInfo.prep_time) + convertTimeToMinutes(moreInfo.cook_time) : 0;

  //   const formatTime = (minutes) => {
  //     const hrs = Math.floor(minutes / 60);
  //     const mins = minutes % 60;
  //     return `${hrs > 0 ? `${hrs} hour${hrs > 1 ? 's' : ''} ` : ''}${mins} minute${mins !== 1 ? 's' : ''}`;
  //   };
  return (
    <section className="min-h-dvh md:flex justify-center items-center md:bg-eggshell">
      <article>
        <div className="bg-white md:my-[5rem] md:py-8 pb-8 md:rounded-xl">
          <picture>
            <img
              src={item.thumbnail_image}
              alt=""
              className="md:max-w-[90%] w-full md:h-[570px] md:rounded-xl md:mx-auto"
            />
          </picture>

          <div className="px-8">
            <h1 className="text-4xl mt-12 text-secondary">{item.name}</h1>
            <p className="mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              recusandae eum velit natus, sequi sunt consequatur culpa aperiam
              distinctio possimus pariatur assumenda soluta at error ex
              dignissimos harum earum quasi?
            </p>

            <article className="bg-rose-50 mt-6 p-5 rounded-xl">
              <h3 className="text-xl font-semibold ml-2">Preparation time</h3>
              <ul className="list-disc mt-3 ml-8 text-lg marker:text-orange-500">
                <li className="pl-3">
                  <p>
                    {/* <span>Total : </span> <span>{formatTime(totalTime)}</span> */}
                    <span>Total : </span>{" "}
                    <span>{totalTimeMinutes} minutes</span>
                  </p>
                </li>
                <li className="pl-3 mt-3">
                  <p>
                    <span>Preparation : </span>{" "}
                    <span>{moreInfo?.prep_time}</span>
                  </p>
                </li>
                <li className="pl-3 mt-3">
                  <p>
                    <span>Cooking : </span> <span>{moreInfo?.cook_time}</span>
                  </p>
                </li>
              </ul>
            </article>

            <div className="mt-5">
              <h3 className="text-xl font-semibold ml-2">Ingredients</h3>
              <ul className="list-disc marker:text-blue-500 mt-4 ml-6 text-secondary marker:align-middle">
                {item?.ingredients.map((ingredient, index) => (
                  <li key={index} className="pl-4 mt-2">
                    <span>{ingredient?.name} : </span>
                    <span>{ingredient?.quantity}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <h3 className="text-xl font-semibold ml-2">Instructions</h3>
              <ul className="mt-4 ml-6 text-secondary marker:align-middle">
                {instructionsArray.map((instruction, index) => (
                  <li key={index} className="pl-4 mt-2">
                    <span>{instruction.trim()}.</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SingleProduct;
