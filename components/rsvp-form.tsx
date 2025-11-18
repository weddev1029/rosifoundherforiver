"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { RSVPFormSchema, sendRSVPForm, type TRSVPForm } from "@/config/api";
import { weddingCalendarURL } from "@/siteConfig";
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
      timestamp: Date.now(),
      isAttending: true,
      names: "",
      comments: "",
    },
  });

  async function onSubmit(data: TRSVPForm) {
    try {
      await sendRSVPForm(data);

      toast("🤵🏽 See you at the wedding! 👰🏼", {
        action: {
          label: "🗓️ Save the Date",
          onClick: () => window.open(weddingCalendarURL, "_blank"),
        },
      });

      form.reset();
    } catch (error) {
      toast.error(`${error}`);
      console.error(error);
    }
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
                    checked={field.value}
                    onCheckedChange={field.onChange}
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
                  {...field}
                  required
                  onChange={field.onChange}
                  className="text-dresscode-5 rounded-none bg-dresscode-4 border-none focus-visible:ring-custom-primary/50"
                />
              </FormControl>
              <FormMessage className="text-red-100" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="comments"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg xl:text-xl font-semibold">
                COMMENTS AND/OR QUESTIONS
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  value={field.value || ""}
                  maxLength={100}
                  onChange={field.onChange}
                  className="text-dresscode-5 rounded-none bg-dresscode-4 border-none focus-visible:ring-custom-primary/50"
                />
              </FormControl>
              <FormDescription className="text-white">
                {field.value ? field.value.length : 0} / 100 character
              </FormDescription>
              <FormMessage className="text-red-100" />
            </FormItem>
          )}
        />

        <Button
          variant="outline"
          className="w-full lg:w-fit bg-transparent font-inter rounded-sm"
          disabled={
            form.formState.isLoading ||
            !form.formState.isDirty ||
            form.formState.isSubmitting
          }
        >
          {form.formState.isSubmitting ? (
            <>
              Submitting
              <Loader2 className="animate-spin" />
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
}
