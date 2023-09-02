import React from 'react'
import { Card } from "react-bootstrap";

export default function MovieCard({ title, description, imageUrl }) {
    return (
        <Card>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    )
}