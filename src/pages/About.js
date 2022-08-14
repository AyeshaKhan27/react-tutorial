import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Spinner, Card } from "react-bootstrap";

import { get_Posts } from "../reducer/features";

export default function About() {
  const { posts, loading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_Posts());
  }, []);

  return (
    <Container>
      {loading ? (
        <div className="align-self-center">
          <Spinner />
        </div>
      ) : (
        <div>
          {posts.map((post) => (
            <Card className="my-2">
              <Card.Body>
                <Card.Title className="text-capitalize">
                  {post.title}
                </Card.Title>
                <Card.Text className="text-capitalize">{post.body}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </Container>
  );
}
