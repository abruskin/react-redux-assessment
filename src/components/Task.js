import {Button, Row, Col, Card, Placeholder, Modal, Form, Badge} from 'react-bootstrap'
import {useState, useEffect} from "react";

 export function Tasks({tasks, getTasksPending}) {

    return (
      <>
          {
              tasks && !getTasksPending ?
                  tasks.map((tasks, idx) => <Tasks
                      key={idx} tasks={tasks}
                      />) :
                 <>  <Row> <h1> Tasks </h1></Row>
                  <Row> This is where your tasks will appear </Row> </>
          }
          </>
    )}

