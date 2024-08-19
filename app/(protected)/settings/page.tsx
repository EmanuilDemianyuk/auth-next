"use client";


import * as z from "zod";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCurrentSession } from "@/hooks";
import { useForm } from "react-hook-form";

import { SettingsSchema } from "@/schemas";
import { logout } from "@/app/actions/logout";

import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { FaUser } from "react-icons/fa";

import {
    Form,
    FormMessage,
    FormField,
    FormControl,
    FormItem,
    FormLabel

} from '@/components/ui/form';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AvatarImage } from "@/components/ui/avatar";
import { FormError } from "@/components/FormError";
import { redirect } from "next/navigation";


const SettingsPage = () => {
    const [error, setError] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
    const session = useCurrentSession();


    const form = useForm<z.infer<typeof SettingsSchema>>({
        resolver: zodResolver(SettingsSchema),
        defaultValues: {
            name: session?.user?.name || "",
            email: session?.user?.email || "",
            id: session?.user?.id || "",
            role: session?.user?.role || "",
            expires: session?.expires || "",
        }
    })

    const onSubmit = () => {
        setError("");

        startTransition(() => {
            logout()
                .catch(() => {
                    setError("Something went wrong!")
                })

        })
    }

    return (
        <div className="flex flex-col items-center mt-4 rounded-sm">
            <div className="shadow-md bg-secondary p-4 max-w-[600px]">
                <div className="flex flex-col">
                    <h1 className="font-semibold text-lg  p-4">
                        Welcome back <span className="text-xl">{session?.user?.name} !</span>
                    </h1>
                    <Avatar className="shadow-lg rounded-full max-w-[80px] my-6">
                        <AvatarImage
                            className="rounded-full"
                            src={session?.user?.image || ""}
                        />
                        <AvatarFallback className="bg-sky-500">
                            <FaUser className="text-white" />
                        </AvatarFallback>
                    </Avatar>
                </div>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        <div className="space-y-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                placeholder="John"
                                            />
                                        </FormControl>
                                        <FormMessage></FormMessage>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                placeholder="john.doe@example.com"
                                                type="email"
                                            />
                                        </FormControl>
                                        <FormMessage></FormMessage>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="id"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Id</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                placeholder="********"
                                            />
                                        </FormControl>
                                        <FormMessage></FormMessage>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Role</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                placeholder="USER"
                                            />
                                        </FormControl>
                                        <FormMessage></FormMessage>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="expires"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Expires</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                placeholder="2024-09-18T14:34:37.875Z"
                                            />
                                        </FormControl>
                                        <FormMessage></FormMessage>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormError message={error} />
                        <Button
                            type="submit"
                            variant="destructive"
                            disabled={isPending}
                        >
                            Sign out
                        </Button >
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default SettingsPage