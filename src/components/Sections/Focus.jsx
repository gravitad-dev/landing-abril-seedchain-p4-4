import texts from "../../sections.json";

function Focus() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6  flex flex-col md:flex-row items-center justify-between mt-10">
        <div className="py-6 md:py-0 md:w-1/2 px-6 sm:px-10 md:px-0">
          <div className="relative flex flex-col items-center   ">
            <div className="md:ml-10 mt-10 w-7xl">
              <h1 className="text-5xl font-semibold">Why Trust Us</h1>
            </div>
          </div>
        </div>
        <div className="lg:w-2/5 mx-auto text-center pb-12 md:pb-10">
          <div className="text-start">
            {/* Items */}
            <section className="sm:flex max-w-sm mx-auto flex flex-col gap-5  items-start md:max-w-2xl lg:max-w-4xl  mb-10 mt-10">
              {/* Section 2 */}
              <div className="grid grid-cols-1 gap-3">
                {/* Collapse 1 */}
                <div className="collapse collapse-plus bg-white">
                  <input type="radio" name="my-accordion-3" defaultChecked />
                  <div className="collapse-title text-xl font-medium">
                    Expertise
                  </div>
                  <div className="collapse-content">
                    <p>
                      Our team comprises seasoned professionals with extensive
                      experience in AI and Salesforce.
                    </p>
                  </div>
                </div>
                {/* Collapse 2 */}
                <div className="collapse collapse-plus bg-white">
                  <input type="radio" name="my-accordion-3" defaultChecked />
                  <div className="collapse-title text-xl font-medium">
                    Proven Track Record
                  </div>
                  <div className="collapse-content">
                    <p>
                      We've successfully transformed numerous businesses,
                      helping them achieve remarkable results.
                    </p>
                  </div>
                </div>
                {/* Collapse 3 */}
                <div className="collapse collapse-plus bg-white">
                  <input type="radio" name="my-accordion-3" defaultChecked />
                  <div className="collapse-title text-xl font-medium">
                    Customer-Centric
                  </div>
                  <div className="collapse-content">
                    <p>
                      We prioritize your needs and work closely with you to
                      deliver solutions that exceed expectations.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Focus;
