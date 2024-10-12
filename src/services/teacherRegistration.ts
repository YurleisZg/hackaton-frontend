import api from './api';


interface teacherRegistration {
    hour_value: number;
    courses: string[];
  }
  
  async function teacherRegistration (teacher: teacherRegistration):Promise<boolean> {
    try {
        await api.post('/profesor/registrar', teacher);
    } catch {
        return false;
    }
    return true;
}

export {teacherRegistration};