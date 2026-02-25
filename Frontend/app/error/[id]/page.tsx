import CustomError from "../../_error/error";

export function generateStaticParams() {
  return [400, 401, 403, 404, 500].map((id) => ({ id: String(id) }));
}

export default function ErrorPage({ params }: { params: { id: string } }) {
  const errorCode = Number(params.id);

  // Fallback if someone hits a weird/non-numeric URL
  const safeCode = Number.isFinite(errorCode) ? errorCode : 500;

  return <CustomError statusCode={safeCode} />;
}
