import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const todosAPI = createApi({
    reducerPath: 'todosAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    tagTypes: ['Tasks'],
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => `/tasks`,
            providesTags: ['Tasks']
        }),
        getTaskById: builder.query({
            query: (id) => `/tasks/${id}`,
            providesTags: ['Tasks']
        }),
        addTask: builder.mutation({
            query: ({ id, task }) => ({
                url: '/tasks',
                method: 'POST',
                body: { id, isCompleted: false, task }
            }),
            invalidatesTags: ['Tasks']
        }),
        completeTask: builder.mutation({
            query: ({ id, isCompleted }) => {
                return {
                    url: `/tasks/${id}`,
                    method: 'PATCH',
                    body: { isCompleted }
                }
            },
            invalidatesTags: ['Tasks']
        }),
        deleteTask: builder.mutation({
            query: (id) => ({ 
                url: `/tasks/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Tasks']
        })
    })
})

export const { 
    useGetTasksQuery, 
    useGetTaskByIdQuery, 
    useAddTaskMutation, 
    useCompleteTaskMutation,
    useDeleteTaskMutation 
} = todosAPI

