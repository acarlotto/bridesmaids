import cuid from "cuid";
import React, { useState } from "react";
import { Button, Form, FormField, Header, Segment } from "semantic-ui-react";

export default function EventForm({ setFormOpen, setEvents, createEvent, selectEvent, selectedEvent, updateEvent}) {
const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: ''
}
  const [values, setValues] = useState(initialValues);

  function handleFormSubmit() {
selectedEvent ? updateEvent({...selectedEvent, ...values}) 
: createEvent({
        ...values, 
        id: cuid(), 
        hostedBy: 'Bob', 
        attendees: [],
        hostPhotoURL:'/assets/user.png',
    });
    setFormOpen(false);
  }

  function handleInputChange(e) {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  }

  return (
    <Segment clearing>
      <Header content={selectEvent ? 'Edit the event' : 'Create new event'} />
      <Form onSubmit={handleFormSubmit}>
        <FormField>
          <input type="text" 
          placeholder="Enter event title"
          name='title'
          value={values.title}
          onChange={(e) => handleInputChange(e)} 
          />
        </FormField>
        <FormField>
          <input type="text" 
          placeholder="Category"  
          name='category'
          value={values.category}
          onChange={(e) => handleInputChange(e)} 
          />
        </FormField>
        <FormField>
          <input type="text" 
          placeholder="Description"  
          name='description'
          value={values.description}
          onChange={(e) => handleInputChange(e)} />
        </FormField>
        <FormField>
          <input type="text" 
          placeholder="City"  
          name='city'
          value={values.city}
          onChange={(e) => handleInputChange(e)} />
        </FormField>
        <FormField>
          <input type="text" 
          placeholder="Venue"  
          name='venue'
          value={values.venue}
          onChange={(e) => handleInputChange(e)} />
        </FormField>
        <FormField>
          <input type="date" 
          placeholder="Date"  
          name='date'
          value={values.date}
          onChange={(e) => handleInputChange(e)} />
        </FormField>
        <Button
          type="submit"
          floated="right"
          color="teal"
          positive
          content="Submit"
        />
        <Button
          onClick={() => {
            setFormOpen(false);
          }}
          type="submit"
          floated="right"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
}
