import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EditTaskForm from "./EditTaskForm";
import { mockTask } from '../../../../__tests__/mocks/mockTask'

describe('EditTaskForm', () => {
    test('should present initial value', async () => {
        // Arrange
        const onSubmit = jest.fn();
        const expectedValue = mockTask.title;
        // Act
        render(<EditTaskForm onSubmit={onSubmit} task={mockTask} />);
        const titleInput = screen.getByTestId('title-input')
        // Assert
        expect(titleInput.value).toBe(expectedValue);
    });

    test('should call onSubmit on click ', async () => {
        // Arrange
        const onSubmit = jest.fn();
        // Act
        render(<EditTaskForm onSubmit={onSubmit} task={mockTask} />);
        const editButton = screen.getByTestId('edit-button')
        fireEvent.click(editButton)
        // Assert
        expect(onSubmit).toBeCalled();
    });
});