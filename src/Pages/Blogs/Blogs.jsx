import { Helmet } from "react-helmet";

const Blogs = () => {
  return (
    <div>
      <Helmet>
        <title>Blogs - Wild Joy</title>
      </Helmet>
      <div>
        <div className="grid md:grid-cols-2 gap-4 max-w-7xl my-20 mx-auto">
          <div>
            <div className="card w-full bg-base-100 h-auto mb-5 md:h-80  shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-wildJoyColorTwo">
                  1. What is an access token and refresh token? How do they work
                  and where should we store them on the client-side?
                </h2>
                <p className="mt-5">
                  Ans. Access tokens and refresh tokens are used in
                  authentication. An access token is issued to a client app
                  after successful authentication and is used to access
                  protected resources. A refresh token is used to obtain a new
                  access token when the current one expires.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="card w-full bg-base-100  mb-5 h-auto  md:h-80 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-wildJoyColorTwo">
                  2. Compare SQL and NoSQL databases?
                </h2>
                <p className="mt-5">
                  Ans. SQL (Structured Query Language) and NoSQL (Not Only SQL)
                  are two different types of database management systems, each
                  with its own characteristics. SQL databases are relational,
                  use structured tables, and follow ACID properties. They are
                  suitable for complex data relationships and transactions.
                  NoSQL databases are non-relational, offer flexibility in data
                  structures, focus on scalability and performance, and are
                  suitable for unstructured or rapidly changing data.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="card w-full bg-base-100  mb-5 h-auto  md:h-80 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-wildJoyColorTwo">
                  3. What is express js? What is Nest JS?
                </h2>
                <p className="mt-5">
                  Ans. Express.js is a minimalist web application framework for
                  Node.js, while Nest.js is an opinionated TypeScript framework
                  built on top of Express.js for building scalable server-side
                  applications.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="card w-full bg-base-100  mb-5 h-auto  md:h-80 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-wildJoyColorTwo">
                  4. What is MongoDB aggregate and how does it work?
                </h2>
                <p className="mt-5">
                  Ans. MongoDBs aggregate is a framework for performing
                  advanced data aggregation operations on collections of
                  documents. It uses a pipeline of stages to filter, group,
                  sort, and transform data. It enables complex data analysis and
                  manipulation within the database.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
