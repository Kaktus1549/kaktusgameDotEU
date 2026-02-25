import CustomError from "../../_error/error";

export function generateStaticParams() {
  return [400, 401, 403, 404, 500].map((id) => ({ id: String(id) }));
}

export default async function ErrorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const errorCode = Number(id);
  const safeCode = Number.isFinite(errorCode) ? errorCode : 500;

  return <CustomError statusCode={safeCode} />;
}
