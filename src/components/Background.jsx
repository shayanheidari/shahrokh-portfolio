import React from "react";

const Background = () => {
  return (
    <>
      <div
        className="mx-auto justify-center flex flex-col h-screen snap-start"
        id="background"
      >
        <div className="mx-10 mt-12 flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 justify-center items-center gap-4 ">
          <div className="card_ h-[28vh] pb-4">
            <h3 className="font-semibold text-2xl text-accent pb-3">
              Education
            </h3>
            <p className="text-pretty text-text text-[1.1rem] h-55 md:h-auto overflow-y-scroll">
              <h4 className="italic text-[1rem] text-accent">2020 – 2024</h4>
              Ph.D. in Computer Science,{" "}
              <span className="font-bold">The University of Auckland</span>{" "}
              <br />
              Thesis:{" "}
              <a href="#" className="italic underline hover:text-accent">
                Quantum Annealing in Computer Vision
              </a>
              <h4 className="italic text-[1rem] text-accent">2014 – 2016</h4>
              M.Sc. in Software Engineering, Science and Research Branch,{" "}
              <span className="font-bold">Azad University</span>
            </p>
          </div>
          <div className="card_ h-[20vh]">
            <h3 className="font-semibold text-2xl text-accent pb-3">
              Postgraduate Training
            </h3>
            <p className="text-pretty text-text text-[1.1rem] h-45 md:h-auto overflow-y-scroll">
              <h4 className="italic text-[1rem] text-accent">2024 – 2025</h4>
              Postdoctoral Fellow in Computer Science,{" "}
              <span className="font-bold">
                The University of Auckland{" "}
              </span>{" "}
              <br /> Research Focus: AI model improvement strategies for
              biosecurity computer vision applications.
            </p>
          </div>
          <div className="card_ h-[33vh] md:col-span-2">
            <h3 className="font-semibold text-2xl text-accent pb-3">
              Current Position
            </h3>
            <p className="text-pretty text-text text-[1.1rem] h-66 md:h-auto overflow-y-scroll w-full">
              <h4 className="italic text-[1rem] text-accent">2025 – Present</h4>
              Research Fellow, Institute of Marine Science,{" "}
              <span className="font-bold">The University of Auckland</span>{" "}
              <br /> Research Focus: Advancing computer vision, photogrammetry,
              and underwater remote sensing techniques for the monitoring and
              analysis of benthic ecosystems, including high-resolution sediment
              microtopography characterization using stereo and monocular camera
              systems.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Background;
