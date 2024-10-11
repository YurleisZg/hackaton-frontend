import api from './api';

interface courseModel {
    idCourse: string;
}

async function assignedCourse(course:courseModel) {
    try {
        await api.post('/course', course);
    } catch {
        return false;
    }
    return true;
}

export {assignedCourse}