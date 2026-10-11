import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState  = {
    user: {
        users: [
            // {
            //     id: "1787470403207",
            //     email: "hidayatmaruf99@gmail.com",
            //     name: "alma'ruf hidayat",
            //     password: "12345678",
            //     role: "attendee"
            // } 
        ],
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: null
    },
    actived: {
        id: null,
        isActive: false,
        role: "guest",
        isError: false,
        message: null
    },
    userExist: {
        isExist: false,
        message: null,
        data: {}
    },
    data: {
        organizers: [],
        speakers: [],
        communityMembers: [],
        members: [],
        communities: [],
        events: [],
        isPending: false,
        isSuccess: false,
        isError: false,
        message: null,
    },
    filtered: [],
    isDark: false,
}

export function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Gagal mengambil data');
        }
        const data = await response.json();
        resolve(data);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
}

export const getAllData = createAsyncThunk(
    "getAllData",
    async (url, {rejectWithValue}) => {
        try {
            const data = await fetchData(url)
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const eventHub = createSlice({
    name: "eventHub",
    initialState,
    reducers: {
        registerUser: (state, {payload}) => {
            state.user.isLoading = true
            state.user.isError = false
            state.user.isSuccess = false
            state.user.message = null
            const isReady =  state.user.users.some((e)=> e.email === payload.email)

            if(isReady) {
                state.user.isLoading = false
                state.user.isError = true
                state.user.message = "Email sudah terdaftar !"
                return
            }

            state.user.isLoading = false
            state.user.isSuccess = true
            state.user.message = `${payload.email} berhasil terdaftar !`
            state.user.users.push(payload)
        },
        tglDark: (state) => {
            state.isDark = !state.isDark
        },
        checkEmail: (state, {payload}) => {
            state.userExist.isExist = false
            state.userExist.message = null
            const isReady =  state.user.users.find((e)=> e.email === payload || e.id === payload)

            if (!isReady) {
                state.userExist.message = "email belum terdaftar !"
                return
            }
            
            state.userExist.isExist = true
            state.userExist.message = `${payload} ready exist !`
            state.userExist.data = isReady
        },
        login: (state, {payload})=> {
            const isReady =  state.user.users.find((e)=> e.email === payload.email)

            if (!isReady) {
                state.actived.isActive = false
                state.actived.isError = true
                state.actived.message = "email salah atau belum terdaftar"
                return
            }

            if (btoa(isReady.password) !== payload.password) {
                state.actived.isActive = false
                state.actived.isError = true
                state.actived.message = "Pasword Salah !"
                return
            }
            
            state.actived.isError = false
            state.actived.isActive = true
            state.actived.id = isReady.id
            state.actived.message = null
            state.actived.role = isReady.role
        },
        logout: (state)=> {
            state.actived.isError = false
            state.actived.isActive = false
            state.actived.id = null
            state.actived.message = null
            state.actived.role = "guest"
        },
        filterEvents: (state, {payload}) => {
            const {category, community, limit} = payload
            const events = payload.events
            let filtered = category !== null ? events.filter((e) => {
              return e.category.some(
                (d)=> d.toLocaleLowerCase() === category.toLocaleLowerCase()
              )
            }) : events;
        
            filtered = community !== null ? events.filter((e) => {
              return e.communityId.toLocaleLowerCase() === community.toLocaleLowerCase()
            }) : filtered;
            
            const results = limit ? filtered.slice(0, limit) : filtered;

            state.filtered = results
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllData.pending, (state) => {
            state.data.isPending = true;
            state.data.isSuccess = false;
            state.data.isError = false;
            state.data.message = null;
        })
        .addCase(getAllData.fulfilled, (state, action) => {
            state.data.isPending = false;
            state.data.isSuccess = true;
            state.data.message = "Data berhasil dimuat";
            state.data.organizers = action.payload.organizers || [];
            state.data.speakers = action.payload.speakers || [];
            state.data.communityMembers = action.payload.communityMembers || [];
            state.data.members = action.payload.members || [];
            state.data.communities = action.payload.communities || [];
            state.data.events = action.payload.events || [];
        })
        .addCase(getAllData.rejected, (state, action) => {
            state.data.isPending = false;
            state.data.isError = true;
            state.data.message = action.payload || "Terjadi kesalahan saat memuat data";
        });
    }
})

export const {
    registerUser, 
    login,
    logout,
    tglDark,
    checkEmail,
    filterEvents
} = eventHub.actions
export default eventHub.reducer