import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://xrjbhrderpcplydrmwdk.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyamJocmRlcnBjcGx5ZHJtd2RrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczODg0OTcwMywiZXhwIjoyMDU0NDI1NzAzfQ.xiiLp32mH6zcMWF1ZMPcykLi5dn2nulhxcFOPuL6Cks",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyamJocmRlcnBjcGx5ZHJtd2RrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczODg0OTcwMywiZXhwIjoyMDU0NDI1NzAzfQ.xiiLp32mH6zcMWF1ZMPcykLi5dn2nulhxcFOPuL6Cks"
    }
})