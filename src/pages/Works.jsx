import { Layout } from "../components/Layout";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Projects } from "../data/projectsData";
import { Circle } from "../components/circle";
import { ProjectViewMoreCard } from "../components/card";
import Footer from "../layout/Footer";

export default function Works() {
  const navigate = useNavigate();
  const handleCardClick = (title) => {
    navigate(`/project/${title}`);
  };

  const { title } = useParams();
  const project = Projects.find((item) => item.title === title);

  if (!title || !project) return <p>Project Not Found</p>;
  return (
    <Layout>
      <section className="aa-bg-white rounded-bottom-5 ">
        <div className="row g-0 mx-3 mx-sm-4 mx-md-5 pt-3 ">
          <span className="">
            {" "}
            <Link to="/home" className="aa-text-accent me-1">
              Home
            </Link>{" "}
            |{" "}
            <Link to="/projects" className="aa-text-accent mx-1">
              Projects
            </Link>{" "}
            | <span className="mx-1">{project.category}</span> |{" "}
            <span className="mx-1">{project.title} </span>
          </span>
        </div>
        <div className="row g-0 project-margin py-5">
          {/*Project Name */}
          <h1 className="aa-fs-header-2 mb-0 text-center">{project.title}</h1>
          {/* Project Category */}
          <h1 className="aa-fs-header-2 aa-text-accent mb-2 text-center">
            {project.category}
          </h1>
          {/* Project Sample Picture */}
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="mt-3"
          />

          {/* Project Details */}
          <div className="ms-2 mt-3 d-flex flex-wrap align-items-center gap-2 aa-fs-p-5">
            <dl className="mb-0 d-flex align-items-center aa-box gap-1">
              <dt className="fw-semibold">Service</dt>
              <dd className="text-muted  mb-0">{project.overview.service}</dd>
            </dl>
            <dl className="mb-0 d-flex align-items-center aa-box gap-1">
              <dt className="fw-semibold">Tools</dt>
              <dd className="text-muted  mb-0">{project.overview.tools}</dd>
            </dl>
            <dl className="mb-0 d-flex align-items-center aa-box gap-1">
              <dt className="fw-semibold">Year</dt>
              <dd className="text-muted  mb-0">{project.overview.year}</dd>
            </dl>

            {project.category !== "Graphic Design" && (
              <>
                {project.identifier !== "mobile" && (
                  <>
                    {/* Visit Website */}
                    <div className="ms-auto d-none d-sm-flex">
                      <a
                        href={project.websiteUrl}
                        className="aa-btn-accent"
                        aria-label="Visit project website"
                      >
                        VISIT WEBSITE
                      </a>
                    </div>
                    <div className="d-flex d-sm-none mt-3">
                      <a
                        href={project.websiteUrl}
                        className="aa-btn-accent"
                        aria-label="Visit project website"
                      >
                        VISIT WEBSITE
                      </a>
                    </div>
                  </>
                )}
              </>
            )}
          </div>

          {/* Project Overview */}
          <div className="mt-5 col-lg-10">
            <h1 className="aa-fs-header-2 ">Project Overview</h1>
            <p className="aa-fs-p-3 ">{project.projectOverview}</p>

            <div className="d-flex flex-wrap align-items-center aa-fs-p-5 gap-2 ">
              <dl className="mb-0 d-flex align-items-center aa-box gap-1">
                <dt className="fw-semibold">Client</dt>
                <dd className="text-muted  mb-0">
                  {project.projectDetails.client}
                </dd>
              </dl>
              <dl className="mb-0 d-flex align-items-center aa-box gap-1">
                <dt className="fw-semibold">Role</dt>
                <dd className="text-muted  mb-0">
                  {project.projectDetails.role}
                </dd>
              </dl>
              <dl className="mb-0 d-flex align-items-center aa-box gap-1">
                <dt className="fw-semibold">Scope</dt>
                <dd className="text-muted  mb-0">
                  {project.projectDetails.scope}
                </dd>
              </dl>
              <dl className="mb-0 d-flex align-items-center aa-box gap-1">
                <dt className="fw-semibold">Duration</dt>
                <dd className="text-muted  mb-0">
                  {project.projectDetails.duration}
                </dd>
              </dl>
            </div>
          </div>

          {project.identifier !== "template" && (
            <>
              {project.category !== "Graphic Design" && (
                <>
                  {/* Problems */}
                  <div className="mt-5 col-lg-10">
                    <h1 className="aa-fs-header-2 ">The Problem</h1>
                    <p className="aa-fs-p-3 ">{project.problem}</p>
                  </div>
                  {/* Goals */}
                  <div className="mt-4 col-lg-10">
                    <h1 className="aa-fs-header-2 ">The Goal</h1>
                    <p className="aa-fs-p-3">{project.goal}</p>
                  </div>
                  {/* Design Process */}
                  <div className="mt-3 col-lg-10">
                    <h1 className="aa-fs-header-2 mb-3">The Design Process</h1>
                    <h6 className="aa-fs-p-3 fw-bold">
                      Research and Sitemap Structure
                    </h6>
                    <p className="aa-fs-p-3">{project.sitemap}</p>
                  </div>

                  <div className="mt-2 col-lg-10">
                    <h6 className="aa-fs-p-3 fw-bold">Wireframe</h6>
                    <p className="aa-fs-p-3">{project.wirefram}</p>
                  </div>
                  <div className="mt-2 col-lg-10">
                    <h6 className="aa-fs-p-3 fw-bold">UI Design</h6>
                    <p className="aa-fs-p-3">{project.ui}</p>
                  </div>

                  {project.category !== "Graphic Design" && (
                    <>
                      {project.identifier !== "mobile" && (
                        <>
                          {/* Visit Website */}
                          <div className="mt-2 col-lg-10">
                            <h6 className="aa-fs-p-3 fw-bold">
                              Prototype & Testing
                            </h6>
                            <p className="aa-fs-p-3">{project.prototype}</p>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}

          {/* Typography and Color */}
          <div className="mt-4">
            <h1 className="aa-fs-header-2">Typography and Color Branding</h1>
            <div className="d-grid aa-fs-p-4 mt-4 col-lg-10">
              <span className="me-5 aa-fs-p-3 fw-bold">
                {project.typography.fontFamily}
              </span>
              <span className="mt-2 aa-fs-p-3">{project.typography.font}</span>
            </div>
            <h6 className="mt-4 aa-fs-p-3 fw-bold">Color Pallete</h6>
            <div className="d-flex">
              {project.colorPallet.map((color) => (
                <Circle color={color} key={color} />
              ))}
            </div>
          </div>

          {project.category !== "Graphic Design" && (
            <>
              {project.identifier !== "mobile" && (
                <>
                  {/* Wireframe */}
                  <div className="mt-5">
                    <h1 className="aa-fs-header-2 text-center">
                      Wireframe & Prototyping{" "}
                    </h1>
                    <p className="aa-fs-p-3  text-center">
                      {project.wireframeBody}
                    </p>
                    <img
                      src={project.wireframeImage}
                      alt={project.wireframeBody}
                      className="img-fluid w-100 mt-2 mb-5"
                    />
                  </div>
                </>
              )}

              <div className="mt-5">
                <h1 className="aa-fs-header-2 text-center">Visual Design</h1>
                <p className="aa-fs-p-3 text-center">
                  {project.visualDesignBody}
                </p>
                <img
                  src={project.visualDesignImage}
                  alt={project.visualDesignBody}
                  className="img-fluid w-100 mt-2 mb-5"
                />
              </div>
            </>
          )}

          {project.identifier == "template" && (
            <>
              <div className="mt-5">
                <h1 className="aa-fs-header-2 text-center">Related Designs</h1>
                <div className="row g-3 mt-3">
                  {project.relatedDesign.map((items, index) => (
                    <div className="col-12 col-sm-4">
                      <img src={items} key={index} className="img-fluid" />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        <div className="row g-0 project-margin py-5">
          <h1 className="aa-fs-header-2">View more projects</h1>
          {Projects.sort(() => Math.random() - 0.5) // Randomize order
            .slice(0, 2)
            .map((items, index) => (
              <ProjectViewMoreCard
                key={index}
                image={items.image}
                title={items.title}
                category={items.category}
                projectOverview={items.projectOverview}
                year={items.year}
                onclick={() => handleCardClick(items.title)}
              />
            ))}
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </Layout>
  );
}
