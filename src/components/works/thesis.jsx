import React from "react";
import Navbar from "../Navbar.jsx";
import Figure1 from "../../assets/Figure1.png";
import Figure2 from "../../assets/Figure2.png";
import Figure3 from "../../assets/Figure3.png";
import Figure4 from "../../assets/Figure4.png";

const Thesis = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center mt-35 w-[90vw] md:w-[65vw] mx-auto">
        <h1 className="md:text-4xl text-2xl font-semibold">
          Quantum Annealing in Computer Vision
        </h1>
        <h2 className="my-5 italic text-lg md:text-xl">
          Ph.D. Thesis — Dean's List Award Recipient, July 2024
        </h2>
        <h3 className="text-[1.2rem] mt-2">
          Featuring Fall 2024 Editor’s Choice Paper in Future Generation
          Computer Systems Journal
        </h3>
        <p className="text-text text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-2">
          Computer Vision (CV) labelling problems play a pivotal role in
          low-level vision. For decades, it has been known that these problems
          can be elegantly formulated as discrete energy-minimization problems
          derived from probabilistic graphical models such as Markov Random
          Fields (MRFs). Despite recent advances in MRF inference algorithms
          (such as graph-cut and message-passing methods), the resulting
          energy-minimization problems are generally viewed as intractable. The
          emergence of quantum computations, which offer the potential for
          faster solutions to certain problems than classical methods, has led
          to an increased interest in utilizing quantum properties to overcome
          intractable problems. Recently, there has also been a growing interest
          in Quantum Computer Vision (QCV), hoping to provide a credible
          alternative/assistant to deep learning solutions.
        </p>
        <img src={Figure1} alt="" />
        <p className="text-text text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-2">
          Our study focuses on Stereo Matching as a significant CV labelling
          problem. Stereo Matching is a significant challenge due to the
          extensive range of mathematics involved and the complexity of
          recovering unknowns from insufficient information. Despite being
          researched since the 1970s and considering the most recent advances
          using deep-learning-based strategies, Stereo Matching is still
          considered an open problem with no perfect solution.
        </p>
        <img src={Figure2} alt="" />
        <p className="text-text text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-2">
          This study aims to advance the field of Stereo Matching by
          incorporating Quantum Annealing and developing effective quantum
          models that can solve Stereo Matching problems ready for when quantum
          computers can handle large images. Our study begins with a fundamental
          quantum solution for Stereo Matching in the literature. We
          significantly enhance its quantum model complexity using a graph-cut
          method. Although these quantum models can address a particular Stereo
          Matching problem, the underlying energy minimization problem can be
          solved classically in polynomial time. As a result, we shift our focus
          to a more intricate Stereo Matching problem that can be reduced to the
          minimum multi-way cut problem. It is known to be NP-Hard and, at least
          by current algorithmic means, cannot be solved in polynomial time on a
          Turing Machine. Therefore, we introduce the first quantum model that
          can effectively solve the minimum multi-way cut problem. We also
          propose a quantum model that can represent any Stereo Matching energy
          function, providing a flexible framework that adapts seamlessly to
          diverse Stereo Matching scenarios.
        </p>
        <img src={Figure3} alt="" />
        <p className="text-text text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-2">
          Given the constraints imposed by the present quantum processors,
          solving a Stereo Matching problem on full-sized images is impossible.
          To address this challenge, we introduce the first hybrid
          quantum-classical Stereo Matching algorithm.
        </p>
        <img src={Figure4} alt="" />
        <p className="text-text text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-2">
          To evaluate the performance of each quantum model and compare it to
          the current state-of-the-art Stereo Matching minimization techniques,
          we create a stereo dataset using Middlebury images and two natural
          images to incorporate complex real-world scene structures. Our quantum
          solutions demonstrate that Quantum Annealing can yield promising
          results for Stereo Matching problems, with improved accuracy on
          certain stereo images and competitive performance on others. However,
          the development of quantum computers is ongoing, and their complete
          potential for Stereo Matching applications has yet to be fully
          realized. Our investigation also extends to the limitations.
        </p>
        <p className="font-semibold text-text text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-2">
          Publications <br />
          1. Heidari, S., Rogers, M., & Delmas, P. (2021, December). An improved
          quantum solution for the stereo matching problem. In 2021 36th
          International Conference on Image and Vision Computing New Zealand
          (IVCNZ) (pp. 1-6). IEEE. <br />
          2. Heidari, S., & Delmas, P. (2023, August). A Hybrid
          Quantum-Classical Segment-Based Stereo Matching Algorithm.
          In International Conference on Advanced Concepts for Intelligent
          Vision Systems (pp. 1-13). Cham: Springer Nature Switzerland.
          <br />
          3. Heidari, S., Dinneen, M. J., & Delmas, P. (2023). An Equivalent
          QUBO Model to the Minimum Multi-Way Cut Problem. International Journal
          of Unconventional Computing, 18(1). <br />
          4. Heidari, S., Dinneen, M. J., & Delmas, P. (2024). Quantum Annealing
          for Computer Vision Minimization Problems. Future Generation Computer
          Systems, 160, 54-64.
        </p>

        <p className="font-semibold text-text text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-2">
          In the list above in front of each publication we should have a
          clickable (link) Here are the links in order
          <br />
          <a href="https://ieeexplore.ieee.org/abstract/document/9653310?casa_token=73qEgBWLyGsAAAAA:HReKXWZP7YbkBEJJRqouHsMrNP82zp1e62EpPKqLwa3DHE5fExnk6ELLRN73I26AQ52HotXFfQ">
            1
          </a>
          <br />
          <a href="https://link.springer.com/chapter/10.1007/978-3-031-45382-3_1">
            2
          </a>
          <br />
          <a href="https://openurl.ebsco.com/EPDB%3Agcd%3A14%3A10690846/detailv2?sid=ebsco%3Aplink%3Ascholar&id=ebsco%3Agcd%3A162719806&crl=c&link_origin=scholar.google.com">
            3
          </a>
          <br />
          <a href="https://www.sciencedirect.com/science/article/pii/S0167739X24002590">
            4
          </a>
        </p>
      </div>
    </>
  );
};

export default Thesis;
