"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RSVPFormSchema, type TRSVPForm } from "@/config/api";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function RSVPForm() {
  const form = useForm<TRSVPForm>({
    resolver: zodResolver(RSVPFormSchema),
    defaultValues: {
      isAttending: true,
      names: "",
      comments: "",
    },
  });

  function onSubmit(data: TRSVPForm) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        id="rsvp-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 flex-1"
      >
        <FormField
          control={form.control}
          name="isAttending"
          render={({ field }) => (
            <FormItem className="tracking-wide">
              <FormLabel className="text-lg xl:text-xl font-semibold after:ml-0.5 after:content-['*'] after:text-red-500">
                CAN YOU ATTEND?
              </FormLabel>
              <FormControl>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="attendee"
                    defaultChecked
                    onChange={field.onChange}
                    required
                    className="data-[state=checked]:bg-custom-primary data-[state=checked]:border-none"
                  />
                  <Label htmlFor="attendee" className="xl:text-xl">
                    Yes, I'll be there
                  </Label>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="names"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg xl:text-xl font-semibold">
                YOUR NAME (and Companion, if any)
              </FormLabel>
              <FormControl>
                <Input
                  required
                  onChange={field.onChange}
                  className="text-dresscode-5 rounded-none bg-dresscode-4 border-none focus-visible:ring-custom-primary/50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="names"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg xl:text-xl font-semibold">
                COMMENTS AND/OR QUESTIONS
              </FormLabel>
              <FormControl>
                <Textarea
                  maxLength={100}
                  onChange={field.onChange}
                  className="text-dresscode-5 rounded-none bg-dresscode-4 border-none focus-visible:ring-custom-primary/50"
                />
              </FormControl>
              <FormDescription className="text-white">
                {field.value.length ?? 0} / 100 character
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          variant="outline"
          className="w-full lg:w-fit bg-transparent font-inter rounded-sm"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
