import { gql, request } from "graphql-request";

const query = gql`
  query GetAllPosts($first: Int) {
    postCollection(first: $first) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;

export default async function Home() {
  const data = request(
    "http://127.0.0.1:4000/graphql",
    query,
    {
      first: 10,
    },
    {
      "x-api-key": "letmein",
    }
  );

  return (
    <div className="p-6">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
