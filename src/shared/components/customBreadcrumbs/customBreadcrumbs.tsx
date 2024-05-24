type CustomBreadcrumbsProps = {
  breadcrumbs: {
    name: string;
    path: string;
  }[];
};

import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/shadcn/components/ui/breadcrumb";

import { Link } from "react-router-dom";
import { Slash } from "lucide-react";

export const CustomBreadcrumbs: React.FC<CustomBreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <Breadcrumb className="mb-5">
      <BreadcrumbList className="gap-3">
        {breadcrumbs.map((breadcrumb, index) => (
          <BreadcrumbItem
            key={index}
            className={
              index === breadcrumbs.length - 1
                ? "text-secondary-foreground text-xs gap-3 font-bold"
                : "text-[#4E5155] text-xs gap-3 font-bold"
            }
          >
            <Link to={breadcrumb.path} className="font-bold">
              {breadcrumb.name}
            </Link>
            {index < breadcrumbs.length - 1 && (
              <BreadcrumbSeparator className="text-[#53565A]">
                <Slash />
              </BreadcrumbSeparator>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
