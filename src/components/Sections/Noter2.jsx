import texts from '../../sections.json';

function Noter2() {
  return (
    <section className="relative pt-20">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6  flex flex-col md:flex-row items-center justify-between mt-10">
        <div className="lg:w-2/5 mx-auto text-center flex flex-col">
          <div className="text-start">
            <div className="pt-5">
              <h1
                className="text-6xl font-bold mb-3 text-start"
                style={{ color: '#333333' }}
              >
                {texts['section-six'].title}
              </h1>
              <p
                className="text-[#444444] py-2 mb-3"
                style={{ opacity: '60%' }}
              >
                {texts['section-six'].body}
              </p>
            </div>

            {/* Items */}
            <section className="sm:flex max-w-sm mx-auto flex flex-col gap-5  items-start md:max-w-2xl lg:max-w-4xl   ">
              {/* item 1 */}
              <div className="card border p-5 bg-white">
                <h2
                  className="text-3xl font-semibold mb-7"
                  style={{ width: '210px' }}
                >
                  ¿Le gustaría saber más?
                </h2>
                <a
                  className="flex items-center btn text-white bg-[#252432] rounded-lg hover:bg-primary-600 w-80 h-16 sm:ml-0"
                  href="http://blog.seedchain.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {texts['section-two'].button1}
                </a>
              </div>
            </section>
          </div>
        </div>
        <div className="py-6 md:py-0 md:w-1/2 px-6 sm:px-10 md:px-0">
          <div className="relative flex flex-col items-center   ">
            <div className="card border p-5 bg-white">
              <h2 className="text-3xl font-semibold mb-4">
                Servicios Ilimitados
              </h2>
              <p>
                Ser el proveedor líder de soluciones de IA y Salesforce,
                reconocido por nuestra innovación, enfoque centrado en el
                cliente e impacto transformador en las empresas de todo el
                mundo.
              </p>

              {/* <section className="grid grid-cols-2 py-5">
                {texts["section-six"].items.map((item, index) => (
                  <div key={index} className="flex gap-2 m-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <title>item</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    {item}
                  </div>
                ))}
              </section> */}
              {/* <button type="button" className="bg-[#F5F8FF]">
                <a
                  className="flex items-center btn text-black border-none  rounded-lg  hover:bg-[#4E47FF]  w-100 h-16 sm:ml-0"
                  href="#0"
                >
                  <div className="mr-auto flex items-end">
                    <h2 className="text-3xl ">$3,250</h2>
                    <p className="">/mo</p>
                  </div>
                </a>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Noter2;
