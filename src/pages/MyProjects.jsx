import { Layout } from "../components/Layout";
import Footer from "../layout/Footer";
import { Projects } from "../data/projectsData";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProjectCard } from "../components/card";
export default function MyProjects() {
  {
    /* === Category === */
  }
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(Projects.map((item) => item.category))];
  const filteredServices =
    selectedCategory === "All"
      ? Projects
      : Projects.filter((item) => item.category === selectedCategory);

  {
    /* === Sort Order === */
  }
  const [sortOrder, setSortOrder] = useState("latest");
  const sortedAndFilteredServices = [...filteredServices].sort((a, b) => {
    if (sortOrder === "latest") {
      return b.overview.year - a.overview.year;
    } else {
      return a.overview.year - b.overview.year;
    }
  });
  const navigate = useNavigate();
  const handleCardClick = (title) => {
    navigate(`/project/${title}`);
  };
  return (
    <Layout>
      <section className="aa-bg-white rounded-bottom-5" id="project">
        <div className="row g-0 mx-3 mx-sm-4 mx-md-5 pt-3 ">
          <span className="">
            {" "}
            <Link to="/home" className="aa-text-accent">
              Home
            </Link>{" "}
            | My Projects
          </span>
        </div>

        <div className="row g-0 mx-3 mx-sm-4 mx-md-5 pt-5 ">
          <h1 className="aa-fs-header-2">My Works</h1>
          <div className="d-flex justify-content-start">
            <div className="d-flex align-items-center">
              <ul id="portfolio-flters" className="list-unstyled d-flex text-center">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    data-filter={
                      category === "All"
                        ? "*"
                        : `.filter-${category.toLowerCase()}`
                    }
                    className={`me-5 category ${
                      selectedCategory === category ? "filter-active" : ""
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr className="border-1 pb-2" />
          <div className="d-flex justify-content-end">
            <div className="d-flex align-items-center">
              <span className="mx-1">Sortby:</span>
              <select
                className="form-select mx-1"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="latest">Latest - Oldest</option>
                <option value="oldest">Oldest - Latest</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row g-0 mx-3 mx-sm-4 mx-md-5 pb-5">
          {sortedAndFilteredServices.map((items, index) => (
            <ProjectCard
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
    <Footer/>
    </Layout>
  );
}