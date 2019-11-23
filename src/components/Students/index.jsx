import React from "react";
export default class Students extends React.Component {
    componentDidMount() {
        const { fetchStudents, dispatchRenderSuccessfulEvent } = this.props;
        if (fetchStudents && typeof fetchStudents === typeof Function) fetchStudents();
        if (dispatchRenderSuccessfulEvent && typeof dispatchRenderSuccessfulEvent === typeof Function)
            dispatchRenderSuccessfulEvent();
    }
    render() {
        const { students } = this.props;
        return (<div>
            <h2>List of students with their age and grades</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Overall Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {students && Array.isArray(students) ?
                        students.map((student, index) => (
                            <tr key={`${student.name}_${index}`}>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.overallGrade}</td>
                            </tr>
                        )) : null
                    }
                </tbody>
            </table>
        </div>)
    }
}